import React from "react";
import { Link } from "react-router-dom";


import "./Home.css";
import house from "../media/icons8-house-48.png";

export default function Home() {
  
  return (
      <>
        <div id="logo-wrap">
            <img src={house} alt="icon of a house" className="logo icon"/>
            <h4 className="logo">RUTH ESCORCIA</h4>
        </div>
        
        <div id="welcome-wrap">
            <h1>
                <div>Want to buy or sell a home?</div>
                <div>I make it easy</div>
            </h1>
            <Link to="/contact" className="button">Contact</Link>
        </div>
        
        <Link to="/home">Home</Link>
        
      </>
  );
}
