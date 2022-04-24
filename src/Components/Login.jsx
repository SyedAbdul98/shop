import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import validator from "validator";
import Footer from "./Footer"
import {Link} from "react-router-dom"
import "./Login.css"

export default function Login() {
  const [email, setemail] = useState("");
  const [validateMessage, setValidateMessage] = useState("")

  const validateEmail = (e) => {

    if(validator.isEmail(email)){
      setValidateMessage("")
    }else{
      setValidateMessage("Invalid email")
    }
  }
  
  return (
    <div className="login">
      <Navbar />
      <SearchBar />
      <div className="get-started">
        <p>
          GET <span style={{ color: "#f5a207" }}>STARTED </span>{" "}
        </p>
      </div>
      <div className="welcome">
        <p>Welcome to Bharmar</p>
      </div>

      <div className="signin">
        <div className="input">
          <div className="signin-heading">SIGN-IN</div>
          <div className="email-pass">
            <form action="Post">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                className="input-email"
                required
                onChange={(e) => setemail(e.target.value)}
              />

              <p style={{marginLeft: "200px", color:"red", fontWeight: "20px"}}>{validateMessage}</p>

              <input
                type="password"
                name=""
                id=""
                placeholder="Enter password"
                className="input-password"
              />
            </form>
          </div>
          <div className="forget-pas">Forget your password ?</div>
          <div className="login-signup">
            <button className="login-btn" onClick={(e) => validateEmail(e)}>Login</button>
            
            <Link to = "/signup" style={{color: "white", textDecoration: "none"}}>

            <button
              className="login-btn"
              onClick={() => {}}
            >
              Sign Up
            </button>
              </Link>
          </div>
        </div>
        <p className="or-text">OR</p>
        <div className="goole-signin">
          <div className="sign-with-facebook-google">
            <div className="sign-facebook">
              {" "}
              <img
                src={require("./Images/facebook-logo.png")}
                alt=""
                width="30vw"
                height="30vh"
              />{" "}
              Sign in with Facebook
            </div>
            <div className="sign-facebook">
              {" "}
              <img
                src={require("./Images/Gmail-logo.png")}
                alt=""
                width="25vw"
                height="25vh"
              />{" "}
              Sign in with Google
            </div>
            <div className="terms">
              <div className="terms-and-conditions">
                {" "}
                <p style={{ color: "white", fontWeight: "bold"}}>
                  <span style={{ textDecoration: "underline"}}>By continuing you agree to our</span>{" "}
                  <span style={{ color: "black" }}>
                    Terms of Service, Privacy and policy
                  </span>{" "}
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
