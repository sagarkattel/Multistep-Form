import { Link} from "react-router-dom";
import { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  )
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, setValue, storageKey])
  return [value, setValue];
}

function Nav() {


  const location = useLocation();
  const currentPage = location.pathname;
  



  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const[hclick1,setHclick1]=useLocalStorage("is-click1",true);
  const[hclick2,setHclick2]=useLocalStorage("is-click2",false);
  const[hclick3,setHclick3]=useLocalStorage("is-click3",false);
  const[hclick4,setHclick4]=useLocalStorage("is-click4",false);

  useEffect(() => {
    if (currentPage === '/') {
      setHclick1(true);
      setHclick2(false);
      setHclick3(false);
      setHclick4(false);
    } else if (currentPage === '/plan') {
      setHclick1(false);
      setHclick2(true);
      setHclick3(false);
      setHclick4(false);
    } else if (currentPage === '/ads') {
      setHclick1(false);
      setHclick2(false);
      setHclick3(true);
      setHclick4(false);
    } else if (currentPage === '/summary') {
      setHclick1(false);
      setHclick2(false);
      setHclick3(false);
      setHclick4(true);
    } 
  }, [currentPage, setHclick1, setHclick2, setHclick3, setHclick4]);

  const handleClick1 = () => {
    setHclick1(true);
    setHclick2(false);
    setHclick3(false);
    setHclick4(false);
  };
  
  const handleClick2 = () => {
    setHclick1(false);
    setHclick2(true);
    setHclick3(false);
    setHclick4(false);
  };
  
  const handleClick3 = () => {
    setHclick1(false);
    setHclick2(false);
    setHclick3(true);
    setHclick4(false);
  };
  
  const handleClick4 = () => {
    setHclick1(false);
    setHclick2(false);
    setHclick3(false);
    setHclick4(true);
  };


  return (
    <div className="navbar1">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <div className="step" onClick={handleClick1}>
                  <div className="one" style={{ backgroundColor: hclick1 ? 'darkgrey' : '' }} >
                    1
                  </div>

                  <div className="two">
                    Step 1
                    <p class="thicker">YOUR INFO</p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/plan"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <div className="step" onClick={handleClick2}>
                  <div className="one" style={{ backgroundColor: hclick2 ? 'darkgrey' : '' }}>
                    2
                  </div>
                  <div className="two">
                    Step 2
                    <p class="thicker">SELECT PLAN</p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/ads"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <div className="step" onClick={handleClick3}>
                  <div className="one" style={{ backgroundColor: hclick3 ? 'darkgrey' : '' }}>
                    3
                  </div>
                  <div className="two">
                    Step 3
                    <p class="thicker">ADD-ONS</p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/summary"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <div className="step" onClick={handleClick4}>
                  <div className="one" style={{ backgroundColor: hclick4 ? 'darkgrey' : '' }}>
                    4
                  </div>
                  <div className="two">
                    Step 4
                    <p class="thicker">SUMMARY</p>
                  </div>
                </div>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                exact
                to="/categories"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Categories
              </Link>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
