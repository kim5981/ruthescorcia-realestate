import React from "react";
import Listing from "./Listing";
import "./Listings.css";

export default function ListingsWrapper(){

    const propertyListings = [
        {
          id: 1,
          title: "Beautiful Family Home",
          description: "Spacious 4-bedroom home with a backyard and stunning mountain views.",
          price: 350000,
          bedrooms: 4,
          bathrooms: 2.5,
          area: 2000,
          location: {
            city: "Los Angeles",
            state: "California",
            zipCode: "90001",
          },
          images: [
            "https://example.com/images/photo1.jpg",
            "https://example.com/images/photo2.jpg",
            "https://example.com/images/photo3.jpg",
          ],
          amenities: ["Air Conditioning", "Fireplace", "Garage"],
          agent: {
            name: "John Smith",
            phone: "123-456-7890",
            email: "john@example.com",
          },
        },
        {
          id: 2,
          title: "Modern Condo with City Views",
          description: "Contemporary 2-bedroom condo with panoramic views of downtown Los Angeles.",
          price: 500000,
          bedrooms: 2,
          bathrooms: 2,
          area: 1500,
          location: {
            city: "Los Angeles",
            state: "California",
            zipCode: "90002",
          },
          images: [
            "https://example.com/images/photo4.jpg",
            "https://example.com/images/photo5.jpg",
            "https://example.com/images/photo6.jpg",
          ],
          amenities: ["Gym", "Concierge", "Balcony"],
          agent: {
            name: "Emily Johnson",
            phone: "987-654-3210",
            email: "emily@example.com",
          },
        },
        {
          id: 3,
          title: "Beachfront Bungalow",
          description: "Quaint 1-bedroom bungalow just steps away from the sandy shores of Huntington Beach.",
          price: 750000,
          bedrooms: 1,
          bathrooms: 1,
          area: 800,
          location: {
            city: "Huntington Beach",
            state: "California",
            zipCode: "92648",
          },
          images: [
            "https://example.com/images/photo7.jpg",
            "https://example.com/images/photo8.jpg",
            "https://example.com/images/photo9.jpg",
          ],
          amenities: ["Ocean View", "Private Patio"],
          agent: {
            name: "Sarah Davis",
            phone: "555-123-4567",
            email: "sarah@example.com",
          },
        },
        {
          id: 4,
          title: "Cozy Riverside Home",
          description: "Charming 3-bedroom home in Riverside County with a spacious backyard and mountain views.",
          price: 450000,
          bedrooms: 3,
          bathrooms: 2,
          area: 1800,
          location: {
            city: "Riverside",
            state: "California",
            zipCode: "92501",
          },
          images: [
            "https://example.com/images/photo10.jpg",
            "https://example.com/images/photo11.jpg",
            "https://example.com/images/photo12.jpg",
          ],
          amenities: ["Garden", "Patio"],
          agent: {
            name: "Michael Johnson",
            phone: "111-222-3333",
            email: "michael@example.com",
          },
        },
        {
          id: 5,
          title: "Spacious Ranch House",
          description: "Sprawling 5-bedroom ranch house in Riverside County with a large yard and scenic views.",
          price: 950000,
          bedrooms: 5,
          bathrooms: 3.5,
          area: 4000,
          location: {
            city: "Corona",
            state: "California",
            zipCode: "92879",
          },
          images: [
            "https://example.com/images/photo13.jpg",
            "https://example.com/images/photo14.jpg",
            "https://example.com/images/photo15.jpg",
          ],
          amenities: ["Swimming Pool", "Fire Pit", "Outdoor Kitchen"],
          agent: {
            name: "Jessica Smith",
            phone: "999-888-7777",
            email: "jessica@example.com",
          },
        },
      ];
      
      // 
    
    return (
        <div id="listings">
            <h2>Homes For Sale</h2>

            <div id="listings-wrap">

            {
                propertyListings.map((l, key) => (
                     <Listing
                     price={ l.price }
                     bedrooms={ l.bedrooms }
                     bathrooms={ l.bathrooms }
                    location={ l.location }
                    images={ l.images }
                    area={ l.area }
                    />
                ))
            }

            </div>
        </div>
    )
}