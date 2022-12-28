import '../styles/summary.css';

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  )
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, setValue, storageKey])
  return [value, setValue];
}

export function Summary() {

  const location = useLocation();
  // const navigate = useNavigate();
  const [isOn] = useLocalStorage("is-on", location.state);

  const [isActive1] = useLocalStorage("is-active1", location.state);
  const [isActive2] = useLocalStorage("is-active2", location.state);
  const [isActive3] = useLocalStorage("is-active3", location.state);

  const [isChecked1] = useLocalStorage("is-checked1", location.state);
  const [isChecked2] = useLocalStorage("is-checked2", location.state);
  const [isChecked3] = useLocalStorage("is-checked3", location.state);

  // console.log(isOn);

  // console.log(isActive1);
  // console.log(isActive2);
  // console.log(isActive3);

  console.log(isChecked1);
  console.log(isChecked2);
  console.log(isChecked3);

  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calculateSum = () => {
      let sum = 0;
      if (isChecked1) {
        sum += isOn ? 10 : 1;
      }
      if (isChecked2) {
        sum += isOn ? 20 : 2;
      }
      if (isChecked3) {
        sum += isOn ? 30 : 3;
      }
      if(isActive1&&isOn){
        sum+=90;
      }
      if(isActive1&&!isOn){
        sum+=9;
      }

      if(isActive2&&isOn){
        sum+=120;
      }
      if(isActive2&&!isOn){
        sum+=12;
      }

      if(isActive3&&isOn){
        sum+=150;
      }
      if(isActive3&&!isOn){
        sum+=15;
      }
      return sum;
    }

    setSum(calculateSum());
  }, [isChecked1, isChecked2, isChecked3, isActive1, isActive2, isActive3,isOn]);

  console.log(sum)

  return (
    <div className='mainsummary'>

      <div className="summaryone">
        <h1>Summary</h1>
        <h3>Double-check everything looks OK before confirming.</h3>
      </div>

      <div className="summarytwo">
        <div className="maintwo">
          <div className="te">
            {isActive1 ?
              <h3>Arcade {(isOn ? "(Yearly)" : "(Monthly)")}</h3>
              : ""}
            {isActive2 ?
              <h3>Advanced {(isOn ? "(Yearly)" : "(Monthly)")}</h3>
              : ""}
            {isActive3 ?
              <h3>Pro {(isOn ? "(Yearly)" : "(Monthly)")}</h3>
              : ""}

            <p><Link to="/plan" style={{ color: 'black' }}>Change</Link></p>
          </div>
          <div className="pr">

            {isActive1 ?
              <h4>$9{(isOn ? "0/yr" : "/mo")}</h4>
              : ""}
            {isActive2 ?
              <h4>$12{(isOn ? "0/yr" : "/mo")}</h4>
              : ""}
            {isActive3 ?
              <h4>$15{(isOn ? "0/yr" : "/mo")}</h4>
              : ""}
            {/* <h4>$9/mo</h4> */}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
        <div className="maintwo">
          <div className="te">
            {isChecked1 ?
              <p>Online Service</p> : ""}
            {isChecked2 ?
              <p>Larger Storage</p> : ""}
            {isChecked3 ?
              <p>Customizable Profile</p> : ""}
          </div>
          <div className="pr">
            {isChecked1 ?
              <h5>+$1{isOn ? "0/yr" : "/mo"}</h5> : ""}
            {isChecked2 ?
              <h5>+$2{isOn ? "0/yr" : "/mo"}</h5> : ""}

            {isChecked3 ?
              <h5>+$3{isOn ? "0/yr" : "/mo"}</h5> : ""}
            {/* <h5>+$2/mo</h5> */}
          </div>
        </div>


      </div>

      <div className="summarythree">
        <p>Total {isOn ? "(per year)" : "(per month)"}</p>
        <span><h2>+${sum}/{isOn ? "yr" : "mo"}</h2></span>
      </div>

      <div className="fourth">
        <Link to="/ads"><input type="submit" value="Go Back" style={{ backgroundColor: 'gray' }} /></Link>
        <Link to="/thank"><input type="submit" value="Confirm" /></Link>
      </div>
    </div>
  );
};