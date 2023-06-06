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
            <img src={null} alt="image of property at following address"/>
            <h5>{ price }</h5>
            <p>{ location.city }, { location.state }</p>
            <p> { bedrooms } beds| { bathrooms } baths| { area } sq ft</p>
        </div>
    )
}