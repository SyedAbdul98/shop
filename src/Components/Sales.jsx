import React from "react";
import Rating from "./Rating";
import "./SalesArrivalsFeatured.css"

export default function Sales(props) {
  return (
    <React.Fragment>
      <div className="head-div-sales">
        <h5 className="head"> Flash Sales</h5>
      </div>
      <div className="contain">
        <div className="img-des-price-container">
          <div className="single-card">
            <div className="img-card">
              <img
                className="card-image"
                src={props.img}
                alt=""
              />
              <div className="card-text">{props.description}</div>
              <div className="price-and-rating">
                <h6 className="card-title">Rs. {props.price}</h6>
                <div className="rating">
                  {" "} 
                  <Rating />{" "}
                </div>
              </div>
            </div>
          </div>
          {/*
          <div className="single-card">
            <div className="img-card">
              <img
                className="card-image"
                src={require("./Images/purse.jpg")}
                alt=""
              />
              <div className="card-text">Bonanza Watches, for sale</div>
              <div className="price-and-rating">
                <h6 className="card-title">Rs.300</h6>
                <div className="rating">
                  {" "}
                  <Rating />{" "}
                </div>
              </div>
            </div>
          </div>

           <div className="single-card">
            <div className="img-card">
              <img
                className="card-image"
                src={require("./Images/womanpurse.jpg")}
                alt=""
              />
              <div className="card-text">Bonanza Watches, for sale</div>
              <div className="price-and-rating">
                <div className="card-subtitle">Rs.300</div>
                <div className="rating">
                  {" "}
                  <Rating />{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="single-card">
            <div className="img-card">
              <img
                className="card-image"
                src={require("./Images/clothes.jpg")}
                alt=""
              />
              <div className="card-text">Bonanza Watches, for sale</div>
              <div className="price-and-rating">
                <h6 className="card-title">Rs.300</h6>
                <div className="rating">
                  {" "}
                  <Rating />{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="single-card">
            <div className="img-card">
              <img
                className="card-image"
                src={require("./Images/bags.jpg")}
                alt=""
              />
              <div className="card-text">Bonanza Watches, for sale</div>
              <div className="price-and-rating">
                <h6 className="card-title">Rs.300</h6>
                <div className="rating">
                  {" "}
                  <Rating />{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="single-card">
            <div className="img-card">
              <img
                className="card-image"
                src={require("./Images/image.jpg")}
                alt=""
              />
              <div className="card-text">Bonanza Watches, for sale</div>
              <div className="price-and-rating">
                <h6 className="card-title">Rs.300</h6>
                <div className="rating">
                  {" "}
                  <Rating />{" "}
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </React.Fragment>
  );
}
