//import React from 'react'

import React from "react";
import location from "../../assets/Map.png";
import Globe from "../../assets/Globe.png";
import Money from "../../assets/Money.png";
import Time from "../../assets/Time.png";
import style from "../../Css/Jobtitle/Jobtitle.module.css";
import { NavLink } from "react-router-dom";
function Jobtitle() {
  return (
    <React.Fragment>
      <div className={style.jobtitle}>
        <h5>Job Title</h5>
        <p>company</p>
        <div>
          <div>
            <img src={location} alt="" />
            <span>Location</span>
            <hr className={style.line} />
            <div></div>
          </div>

          <div>
            <img src={Globe} alt="" />
            <span>Remote</span>
          </div>
          <div>
            <img src={Money} alt="" />
            <span>N20,000/mo</span>
          </div>
          <div>
            <img src={Time} alt="" />
            <span>24HRS/week</span>
          </div>
        </div>

        <div className={style.foot}>
          <span>10days ago</span> <span>12 Applicants</span>
        </div>
        <span className={style.details}>
          <NavLink to="/Jobtitleatcompany"> View Details</NavLink>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Jobtitle;
