import React from "react";
//import "../../Css/Footer/Footer.css";
import Insta from "../../assets/Insta.png";
import Twitter from "../../assets/Twitter.png";
import linkdn from "../../assets/linkdn.png";
import fbck from "../../assets/fbck.png";
import style from "../../Css/Footer/Footer.module.css";

function Footer() {
  return (
    <React.Fragment>
      <div className={style.footer}>
        <div className={style.lists}>
          <ul>
            <li className={style.link}>QUICK LINKS</li>
            <li> About Us</li>
            <li>Contact Us</li>
            <li> Terms & Privacy Policy</li>
            <li> Help</li>
          </ul>
        </div>

        <div className={style.copy}>
          <p>Copyright Student Worker 2024.</p>
        </div>

        <div className={style.right}>
          <div>
            <h4>CONNECT WITH US</h4>
          </div>
          <div className={style.icons}>
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
      </div>
    </React.Fragment>
  );
}

export default Footer;
