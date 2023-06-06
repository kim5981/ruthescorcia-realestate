import React from "react";

// image, price, address, beds, bath, garage, details..?
export default function Listing({
    price,
    bedrooms, 
    bathrooms,
    location,
    area,
    images,


}){
    return (
        <div id="listing">
            <img className="listing-photo" src={null} alt="image of property at following address"/>
            <h5>{ price }</h5>
            <p>{ location.city }, { location.state }</p>
            <p>{ area } sq ft</p>
            <p> { bedrooms } { bedrooms > 1 ? "beds " : "bed " }
            | { bathrooms } { bathrooms > 1 ? "baths " : "bath "}
            </p>
        </div>
    )
}