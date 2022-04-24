import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-div1">
          <div className="footer-row1">
            <div className="customer-care">
              <div className="footer-card-title"> Customer Care </div>
              <div className="footer-card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                recusandae repellendus deleniti facilis natus eos magni.
              </div>
            </div>
            <div className="deal-ker">
              <div className="footer-card-title"> Bharmar </div>
              <div className="footer-card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                recusandae repellendus deleniti facilis natus eos magni.
              </div>
            </div>
          </div>
          <div className="footer-row2">
            <div className="about-us">
              <div className="footer-card-title"> About Us</div>
              <div className="footer-card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                recusandae repellendus deleniti facilis natus eos magni.
              </div>
            </div>
            <div className="our-services">
              <div className="footer-card-title"> Our Services </div>
              <div className="footer-card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                recusandae repellendus deleniti facilis natus eos magni.
              </div>
            </div>
          </div>
        </div>

        {/** footer 2nd div(col) starts here */}

        <div className="footer-div2">
          <div className="barcode">
            <div className="barcode-img">
              <img
                src={require("./Images/qr.png")}
                alt=""
                style={{ height: "19vh", width: "10vw" }}
              />
            </div>
          </div>
          <div className="app-links">
            <div className="app-links-img">
              <div className="app-store">
                <img
                  src={require("./Images/Google-Play-App-Store-PNG-File.png")}
                  alt=""
                  style={{ height: "12vh", width: "12vw", marginLeft: "75px"}}

                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-div3">
          <div className="social-icon">
            <div>
              <span className="follow-us">Follow us</span>
            </div>
            <div className="icon-logos">
              <div className="facebook">
              <img src={require("./Images/facebook-logo.png")} alt="" width="43vw" height="38vh" style={{marginTop: "3px"}}/>
              </div>
              <div className="instagram">
              <img src={require("./Images/Ninsta.png")} alt="" width="50vw" height="46vh" />
              </div>
              <div className="twitter">
              <img src={require("./Images/twitter-logo.png")} alt="" width="50vw" height="46vh" />
              </div>
              <div className="youtube">
              <img src={require("./Images/Nyoutube.png")} alt="" width="43vw" height="38vh" style={{marginTop: "3px"}}/>
              </div>
            </div>
          </div>
          <div className="payment">
            <div>
              <span  className="follow-us">Payment Methods</span>
            </div>
            <div className="icon-logos">
              <div className="facebook">
                <img src={require("./Images/kconnect-logo.png")} alt="" width="45vw" height="45vh" />
              </div>
              <div className="instagram">
              <img src={require("./Images/Jazz Cash Logo.png")} alt="" width="45vw" height="45vh" />
              </div>
              <div className="twitter">
              <img src={require("./Images/Easypaisa New Icon Logo.png")} alt="" width="45vw" height="45vh" />
              </div>
              <div className="youtube">
              <img src={require("./Images/cod-logo.png")} alt="" width="45vw" height="45vh" />
              </div>
            </div>
          </div>
          <div className="verified">
            <div>
              <p className="follow-us">Verified by</p>
            </div>
            <div className="">
              <img src={require("./Images/bank.png")} alt="" width="45vw" height="40vh" />
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
