

import '../styles/info.css'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';


export function Info() {


  const navigate = useNavigate();
  const [input, setInput] = useState({ fname: "", femail: "", fnumber: "" });

  

  const handleName = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }



  const handleEmail = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const handlePhone = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/plan',{state:input.fname});
    // console.log(input);
  }
  return (
    <div className='Main'>
      <div className="in">
        <h1>Personal Info</h1>
        <h2>Please provide your name, email address, and phone number.</h2>
      </div>
      <br />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br />
          <input type="text" id="name" placeholder="e.g. Stephen King" name='fname' onChange={handleName} required />
          <br /><br />
          <label>Email Address</label>
          <br />
          <input type="email" id="femail" placeholder="e.g. stephenking@lorem.com" name='femail' onChange={handleEmail} required />
          <br /><br />

          <label>Phone Number</label>
          <br />
          <input type="phone" id="phone" placeholder="e.g. +1 234 567 890" name='fphone' onChange={handlePhone} required />
          <br /><br /> <br /><br /><br /><br /><br />
          <input type="submit" value="Next Step"  />
        </form>
        {/* <p>Hello,{input.fname}</p> */}
      </div>
    </div>
  );
}