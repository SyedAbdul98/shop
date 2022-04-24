import React from "react";
import listIcon from "./Images/Icons/list.svg";
import { Carousel } from "react-bootstrap";
import "./SideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <React.Fragment>
      <div className="container-div">
         <div className="categories">
          <div className=" tool-div">
            <img src={listIcon} alt="" width="30" height="24" className="" />
            <span className="title h5"> Categories</span>
          </div>
          <div className="toolbar rounded">
            <ul style={{ padding: "4px", margin: "2px" }}>
              <Link to="/productsearchresult" style={{textDecoration: "none", color: "black"}}>
                <li className="m-1 tool-category">
                  {" "}
                  <i className="bi bi-collection-fill m-1"></i> Deals of the Day
                </li>
              </Link>
              <li className="m-1">
                {" "}
                <i className="bi bi-gender-male m-1"></i> Men Products
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-gender-female m-1"></i> Female Products
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-cone-striped m-1"></i> Sports
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-activity m-1"></i> Health
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-life-preserver m-1"></i> LifeStyle
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-stopwatch m-1"></i> Watches
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-bag m-1"></i> Babies
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-droplet-fill m-1"></i> Hot Meals
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-diagram-3-fill m-1"></i> 2021 Stock
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-emoji-heart-eyes m-1"></i> Offers
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-life-preserver m-1"></i> LifeStyle
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-stopwatch m-1"></i> Watches
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-bag m-1"></i> Babies
              </li>
              <li className="m-1">
                {" "}
                <i className="bi bi-emoji-heart-eyes m-1"></i> Offers
              </li>
            </ul>
          </div>
        </div>
        <div className="slider-and-other">
        <div className="slider-div">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./Images/Banner1.png")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./Images/Banner3.png")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./Images/Banner2.png")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        
        <div className="lower-div">
          <div className="first card">
            <img
              className="lower-first-img"
              src={require("./Images/Cover.png")}
              alt=""
            />
          </div>
          <div className="second">
            <div className="row1 card m-1">
              <img
                className="second-row-img"
                src={require("./Images/Banner1.png")}
                alt=""
              />
            </div>
            <div className="row2 card m-1">
              <img
                className="second-row-img"
                src={require("./Images/Banner2.png")}
                alt=""
              />
            </div>
            <div className="row3 card m-1">
              <img
                className="second-row-img"
                src={require("./Images/Banner3.png")}
                alt=""
              />
            </div>
          </div>
          <div className="third">
            <img
              className="lower-third-img"
              src={require("./Images/Post.png")}
              alt=""
            />
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}
