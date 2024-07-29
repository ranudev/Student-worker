import React from "react";
import "../../Css/Footer/Footer.css";
import Insta from "../../assets/Insta.png";
import Twitter from "../../assets/Twitter.png";
import linkdn from "../../assets/linkdn.png";
import fbck from "../../assets/fbck.png";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="lists">
          <ul>
            <li>QUICK LINKS</li>

            <li> About Us</li>
            <li>Contact Us</li>
            <li> Terms & Privacy Policy</li>
            <li> Help</li>
          </ul>
        </div>

        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "flex-end",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "nowrap",
            margin: "inherit",
            width: "14px",
            marginLeft: "395px",
          }}
          //   align-iem:- flex-end property put element in the bottom of div box
        >
          <p
            style={{
              color: "white",
              marginTop: "px",
              backgroundColor: "rgb(52, 31, 151)",
            }}
          >
            Copyright Student Worker 2024.
          </p>
        </div>

        <div className="icons">
          <h4
            style={{
              marginTop: "-100px",
              color: "white",
              marginRight: "-176px",
            }}
          >
            CONNECT WITH US
          </h4>
          <div>
            <img src={Insta} alt="" />
          </div>
          <div>
            <img src={Twitter} alt="" />
          </div>
          <div>
            <img src={linkdn} alt="" />
          </div>
          <div>
            <img src={fbck} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
