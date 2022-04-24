import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./Signup.css"

export default function SignUp() {
  return (
    <React.Fragment>
      <Navbar />
      <SearchBar />
      <div className="create-account">
        <p>
          Create your <span style={{ color: "#f5a207" }}> barmar </span> account{" "}
        </p>
        <span className="already-account">
          Already have account, <Link to="/login">LogIn here</Link>
        </span>
      </div>
      <div className="cover-signup">
        <div className="sign-up">
          <div className="col-one">
            <form action="" method="post" className="form-sigin-details">
              <label>
                <h6>Enter full name:</h6>{" "}
                <input type="text" name="" id="" className="signup-input" />
              </label>
              <br />
              <label>
                <h6>Enter username:</h6>{" "}
                <input type="text" name="" id="" className="signup-input" />
              </label>

              <label>
                <h6>Enter phone number:</h6>{" "}
                <input type="text" name="" id="" className="signup-input" />
              </label>
            </form>
          </div>
          <div className="col-two">
            <form action="" method="post" className="form-sigin-details">
              <label>
                <h6>Enter email:</h6>{" "}
                <input type="email" name="" id="" className="signup-input" />
              </label>

              <label>
                <h6>Enter Password:</h6>{" "}
                <input type="email" name="" id="" className="signup-input" />
              </label>

              <label>
                <h6>Retype Password:</h6>{" "}
                <input type="email" name="" id="" className="signup-input" />
              </label>
            </form>
          </div>
        </div>
      </div>
      <p className="or-text" style={{marginTop: "2px"}}>OR</p>
      <div className=" signbtns ">
      <div className="facebookdiv">
      {" "}
              <img
                src={require("./Images/facebook-logo.png")}
                alt=""
                width="30vw"
                height="30vh"
              />{" "}
              Sign in with Facebook
      </div>
      <div className="googlediv">
      {" "}
              <img
                src={require("./Images/Gmail-logo.png")}
                alt=""
                width="25vw"
                height="25vh"
              />{" "}
              Sign in with Google
      </div>
      <br />
      {" "}
                <p style={{ color: "#f5a207", fontWeight: "bold"}}>
                  <span style={{ textDecoration: "underline"}}>By continuing you agree to our</span>{" "}
                  <span style={{ color: "black" }}>
                    Terms of Service, Privacy and policy
                  </span>{" "}
                </p>{" "}
      </div>
      <Footer />
    </React.Fragment>
  );
}
