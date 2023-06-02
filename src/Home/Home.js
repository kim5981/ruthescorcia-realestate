import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  
  return (
      <>
        <h1>Welcome to Home Page</h1>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
      </>
  );
}
