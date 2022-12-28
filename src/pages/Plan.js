import '../styles/plan.css'

import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import { Link, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

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

export function Plan() {

  const navigate = useNavigate();
  const location = useLocation();


  const [isOn, setIsOn] = useLocalStorage("is-on", true);

  const [isActive1, setIsActive1] = useLocalStorage("is-active1", false);
  const [isActive2, setIsActive2] = useLocalStorage("is-active2", false);
  const [isActive3, setIsActive3] = useLocalStorage("is-active3", false);


  const handleClick1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
  };

  const handleClick2 = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
  };

  const handleClick3 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
  };

  


  const handleChange = () => {
    setIsOn(!isOn);
  }


  const handleSubmit = event => {
    event.preventDefault();

    navigate('/ads', { state: isOn,
      isActive1: isActive1,
      isActive2: isActive2,
      isActive3: isActive3 });
  };

  return (
    <div className="Main" >
      <div className="first">
        <h1>Select Your Plan{location.state ? ", " + location.state : ''}</h1>

        <h3>You have the option of monthly or yearly billing.</h3>
      </div>
      <div className="second">
        {isOn ? <div className="imgntext" style={{ height: '200px',backgroundColor: isActive1 ? 'darkgrey' : '' }} onClick={handleClick1}>
          <div className="img">
            <img src={arcade} alt="" />
          </div>
          <div className="text">
            <h2>Arcade</h2>

            <div>
              <h4>$90/yr</h4>
              <p>2 Months Free</p>
            </div>
            {/* <h4>$9/mo</h4> */}

          </div>
        </div>
          : <div className="imgntext" style={{ backgroundColor: isActive1 ? 'darkgrey' : '' }} onClick={handleClick1}>
            <div className="img">
              <img src={arcade} alt="" />
            </div>
            <div className="text">
              <h2>Arcade</h2>

              <div>
                <h4>$9/mo</h4>
              </div>
            </div>
          </div>
        }




        {isOn ? <div className="imgntext" style={{ height: '200px',backgroundColor: isActive2 ? 'darkgrey' : '' }} onClick={handleClick2}>
          <div className="img">
            <img src={advanced} alt="" />
          </div>
          <div className="text">
            <h2>Advanced</h2>

            <div>
              <h4>$120/yr</h4>
              <p>2 Months Free</p>
            </div>
            {/* <h4>$9/mo</h4> */}

          </div>
        </div>
          : <div className="imgntext" style={{ backgroundColor: isActive2 ? 'darkgrey' : '' }} onClick={handleClick2}>
            <div className="img">
              <img src={advanced} alt="" />
            </div>
            <div className="text">
              <h2>Advanced</h2>

              <div>
                <h4>$12/mo</h4>
              </div>
            </div>
          </div>
        }

        {isOn ? <div className="imgntext" style={{ height: '200px',backgroundColor: isActive3 ? 'darkgrey' : '' }} onClick={handleClick3}>
          <div className="img">
            <img src={pro} alt="" />
          </div>
          <div className="text">
            <h2>Pro</h2>

            <div>
              <h4>$150/yr</h4>
              <p>2 Months Free</p>
            </div>
            {/* <h4>$9/mo</h4> */}

          </div>
        </div>
          : <div className="imgntext" style={{ backgroundColor: isActive3 ? 'darkgrey' : '' }} onClick={handleClick3}>
            <div className="img">
              <img src={pro} alt="" />
            </div>
            <div className="text">
              <h2>Arcade</h2>

              <div>
                <h4>$15/mo</h4>
              </div>
            </div>
          </div>
        }




      </div>
      <div className="third">
        <div className="year">
          Monthly <label className="switch">
            <input type="checkbox" onChange={handleChange} checked={isOn} />
            <span className="slider round"></span>
          </label> Yearly
        </div>
      </div>
      <div className="fourth">
        <Link to="/"><input type="submit" value="Go Back" style={{ backgroundColor: 'gray' }} /></Link>
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Next Step" />
        </form>
      </div>
    </div>
  );
};