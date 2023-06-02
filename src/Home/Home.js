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
        <h1>Welcome to Home Page</h1>
        
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
      </>
  );
}
