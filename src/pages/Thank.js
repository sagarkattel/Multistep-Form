import '../styles/thank.css';
import thanks from '../assets/images/icon-thank-you.svg';
export function Thank(){
    return (
      <div className='mainthank'>
      <img src={thanks} alt="" />
        <h1>Thank You!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
    );
  };