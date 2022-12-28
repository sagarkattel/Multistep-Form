
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Nav from "./Nav";
import {Info} from "../pages/Info";
import {Plan} from "../pages/Plan";
import {Ads} from "../pages/Ads";
import {Summary} from "../pages/Summary";

import {Thank} from "../pages/Thank";

import "../styles/navbar.css";
function Navbar() {
  
  return (
    <div className="main">
     
       <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Info/>} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/thank" element={<Thank />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;