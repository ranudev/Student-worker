//import React from 'react'

import React from "react";
import location from "../../assets/Map.png";
import Globe from "../../assets/Globe.png";
import Money from "../../assets/Money.png";
import Time from "../../assets/Time.png";
import "../../Css/Jobtitle/Jobtitle.css";
import { NavLink } from "react-router-dom";
function Jobtitle() {
  return (
    <React.Fragment>
      <div className="jobtitle">
        <h5>Job Title</h5>
        <p>company</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            marginRight: "80px",
            marginTop: "30px",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <div>
            <img src={location} alt="" />
            <span>Location</span>
            <hr className="line" />
            <div
              style={{
                height: "10px",
                width: "20%",
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            ></div>
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

        <div className="foot">
          <span>10days ago</span> <span>12 Applicants</span>
        </div>
        <span className="details">
          <NavLink to="/Jobtitleatcompany"> View Details</NavLink>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Jobtitle;
