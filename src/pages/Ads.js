import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/ads.css';
import { useNavigate } from 'react-router-dom';

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  )
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, setValue, storageKey])
  return [value, setValue];
}
export function Ads() {

  const location = useLocation();
  const navigate = useNavigate();
  const [isOn] = useLocalStorage("is-on", location.state);

  const [isActive1] = useLocalStorage("is-active1", location.state);
  const [isActive2] = useLocalStorage("is-active2", location.state);
  const [isActive3] = useLocalStorage("is-active3", location.state);
  // console.log(isOn);
  
  // console.log(isActive1);
  // console.log(isActive2);
  // console.log(isActive3);

  const [isChecked1,setisChecked1] = useLocalStorage("is-checked1", false);
  const [isChecked2,setisChecked2] = useLocalStorage("is-checked2", false);
  const [isChecked3,setisChecked3] = useLocalStorage("is-checked3", false);

  const funChecked1=()=>{
    setisChecked1(!isChecked1);
  }
  const funChecked2=()=>{
    setisChecked2(!isChecked2);
  }
  const funChecked3=()=>{
    setisChecked3(!isChecked3);
  }

  console.log(isChecked1);
  console.log(isChecked2);
  console.log(isChecked3);


  const handleSubmit = event => {
    event.preventDefault();

    navigate('/summary', { state: isOn,
      isActive1: isActive1,
      isActive2: isActive2,
      isActive3: isActive3,
      isChecked1: isChecked1,
      isChecked2: isChecked2,
      isChecked3:isChecked3
    });
  };

  return (
    <div className="adsMain">
      <div className="heads">
        <h1>Pick add-ons</h1>
        <span>{isOn ? "Yearly" : "Monthly"}</span>
        <h3>Ad-ons help enhance your gaming experience</h3>
        {isActive1?<span>Arcade</span>:""}
        {isActive2?<span>Advanced</span>:""}
        {isActive3?<span>Pro</span>:""}
      </div>

      <div className="headsecond">
        <div className="onehead">
          <div className="onetick">
            <span>
              <input type="checkbox" className="check" checked={isChecked1} onChange={funChecked1}/>
            </span>
          </div>
          <div className="onetext">
            <h3>Online Services</h3>
            <p>Access to multiplayer game</p>
          </div>
          <div className="onespan">
            {isOn === true ? <span>+$10/yr</span> :
              <span>+$1/mo</span>
            }
          </div>
        </div>

        <div className="onehead">
          <div className="onetick">
            <span>
              <input type="checkbox" className="check" checked={isChecked2} onChange={funChecked2}/>
            </span>
          </div>
          <div className="onetext">
            <h3>Larger Storage </h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div className="onespan">
            {isOn === true ? <span>+$20/yr</span> :
              <span>+$2/mo</span>
            }
          </div>
        </div>

        <div className="onehead">
          <div className="onetick">
            <span>
              <input type="checkbox" className="check" checked={isChecked3} onChange={funChecked3}/>
            </span>
          </div>
          <div className="onetext">
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <div className="onespan">
            {isOn === true ? <span>+$30/yr</span> :
              <span>+$3/mo</span>
            }
          </div>
        </div>

      </div>

      <div className="fourth">
        <Link to="/plan"><input type="submit" value="Go Back" style={{ backgroundColor: 'gray' }} /></Link>
        {/* <Link to="/summary"><input type="submit" value="Next Step" /></Link> */}
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Next Step" />
        </form>
      </div>
    </div>
  );
};