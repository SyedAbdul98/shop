import React from 'react'

export default function SignBtn() {
  return (
    <div>
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
  )
}
