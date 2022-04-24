import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import personIcon from "./Images/Icons/person-circle.svg";
import languageIcon from "./Images/Icons/translate.svg";

export default function Navbar() {
  return (
    <React.Fragment>
      <div
        style={{
          // border: "2px solid black",
          padding: "2px",
          height: "auto",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="#"
              style={{ color: "white" }}
            >
              App
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              <img
                src={languageIcon}
                alt=""
                width="20"
                height="20"
                className="d-inline-block align-text-top"
                style={{ margin: "3px" }}
              />
              English
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              <img
                src={personIcon}
                alt=""
                width="20"
                height="20"
                className="d-inline-block align-text-top"
                style={{ margin: "3px" }}
              />
              My Account
            </a>
          </li>
          <li className="nav-item">
            <Link to='/login' className="link-style" style={{ textDecoration: "none"}}>
              <a className="nav-link" style={{ color: "white"}}>
                Login
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
