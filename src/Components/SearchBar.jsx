import React from "react";
import cartIcon from "./Images/Icons/cart.svg";
import searchIcon from "./Images/Icons/search.svg";
import heartIcon from "./Images/Icons/heart.svg";
import cartFourIcon from "./Images/Icons/cart4.svg";
import logoIcon from "./Images/Icons/LOGO.svg";
import "./SearchBar.css";
export default function SearchBar() {
  return (
    <div className="searchbar">
      <div className="thislogo">
        <img
          src={require("./Images/Icons/logo.png")}
          alt=""
          className="logo-img"
        />
      </div>
      <div className="search-container">
        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="Search" />
            <button type="submit" className="searchButton">
              <img
                src={searchIcon}
                alt="Bootstrap"
                className="m-2 heart-icon search-logo"
                style = {{}}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="thisbtncard">
        <div style={{ height: "10vh", margin: "5px", marginTop: "10px" }}>
          <img
            src={heartIcon}
            alt="Bootstrap"
            className="m-2 heart-icon"
            style={{ width: "5vh", height: "5vh" }}
          />
        </div>
        <div style={{ height: "10vh", margin: "5px", marginTop: "10px" }}>
          <img
            src={cartFourIcon}
            alt="Bootstrap"
            className="m-2 heart-icon"
            style={{ width: "5vh", height: "5vh" }}
          />
        </div>
        <div
          className = "bg-dark m-1 download-div"
          style={{}}
        >
          <a
            href="#"
            className = "download-card h6"
            style={{ textDecoration: "none" }}
          >
            <div className="logocard">
              <img
                src={logoIcon}
                alt=""
                className="logocard-img"
              />
            </div>
            <div className="download-card-text">
              <div className="download-app">Special offer on App</div>
              <div className="download-txt">Download Now</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
