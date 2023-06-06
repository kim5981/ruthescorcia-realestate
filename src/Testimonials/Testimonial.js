import React from "react";

export default function Testimonial({ client }){
    return(
        <div className="testimonial">
                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, 
                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                    nisi ut aliquid ex ea commodi consequatur.
                </p>

                <h3> { client }</h3>
            </div>
    )
};