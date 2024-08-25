import React from "react";
import location from "../../assets/Map.png";
import Globe from "../../assets/Globe.png";
import Money from "../../assets/Money.png";
import Time from "../../assets/Time.png";
import style from "../../Css/Jobtitle/Jobtitle.module.css";
//import { NavLink } from "react-router-dom";
function Jobtitle() {
  return (
    <React.Fragment>
      <p className={style.num}>12,000 Jobs</p>
      <div className={style.mainbox}>
        <div className={style.title}>
          <h3>Job Title</h3>
          <p>Company</p>
        </div>
        <div className={style.icon}>
          <div>
            <img src={location} alt="" />
            <span>Location</span>
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
            <span>24hrs/Week</span>
          </div>
        </div>
        <hr className={style.line} />
        <div className={style.foot}>
          <div className={style.app}>
            <p>10days ago</p>
            <p>12Applicants</p>
          </div>
          <div className={style.det}>View Details</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Jobtitle;
