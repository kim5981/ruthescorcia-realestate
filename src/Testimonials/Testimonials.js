import React from "react";
import "./Testimonials.css";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  
    const clients = [
        "George Hernandez",
        "Crystal Rodriguez",
        "Lisa Stevenson"
    ]
    return (
    <>
      <div id="reviews-wrap">
        <h2>Client Testimonials</h2>
        <div className="quotes-wrap">

            {
            clients.map((client,index) => (
               <Testimonial key={index} client={client} />
            ))
            }
        
        </div>
      </div>
    </>
  );
}
