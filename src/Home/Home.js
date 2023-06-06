import React from "react";
import { Link } from "react-router-dom";

import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";


import logo from "../media/re-logo.png";

export default function Home() {
  
  return (
      <div id="home-wrap">
        <div id="logo-wrap">
            <img src={logo} alt="icon of a house" className="logo icon"/>
        </div>
        
        <div id="welcome-wrap">
            <h1>
                <div>Want to buy or sell a home?</div>
                <div>I make it easy</div>
            </h1>
            <Link to="/contact" className="button">Contact Me</Link>
        </div>
        
        {/* <Link to="/home">Home</Link> */}
    
      </div>
  );
}
