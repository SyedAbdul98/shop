import React from 'react'
import Rating from "./Rating";

export default function Practice(props) {
  return (
    <div>
      <div className="single-card">
            <div className="img-card">
              <img
                className="card-image"
                src= {props.img}
                alt=""
              />
              <div className="card-text">{props.des}</div>
              <div className="price-and-rating">
                <h6 className="card-title">Rs. {props.price}</h6>
                <div className="rating">
                  {" "} 
                  <Rating />{" "}
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
