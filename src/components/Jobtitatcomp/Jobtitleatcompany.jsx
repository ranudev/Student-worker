import React from "react";
//import JobCard from "../JobCard/JobCard";
//import Header from "../Header/Header";
import Styles from "../../Css/jobtitleatcompany/JobTitleatCompany.module.css";
import location from "../../assets/Map.png";
import Globe from "../../assets/Globe.png";
import Money from "../../assets/Money.png";
import Time from "../../assets/Time.png";
import { useLocation } from "react-router-dom";
// import { NavLink } from "react-router-dom";
//import { NavLink } from "react-router-dom";

function Jobtitleatcompany() {
  const location = useLocation();
  const item = location.state;
  return (
    <React.Fragment>
      <hr />
      <p className={Styles.JobCard}>
        {item.jobTitle} at {item.companyName}
      </p>

      <div className={Styles.lowerbox}>
        <div className={Styles.title}>
          <h2 className={Styles.jbtit}>{item.jobTitle}</h2>
          <p className={Styles.cmp}>{item.companyName}</p>
        </div>
        <div className={Styles.icon}>
          <div>
            <img src={location} alt="" />
            <span className={Styles.text}>{item.state}</span>
          </div>

          <div>
            <img src={Globe} alt="" />
            <span className={Styles.text}>{item.location}</span>
          </div>
          <div>
            <img src={Money} alt="" />
            <span className={Styles.text}>{item.salary}</span>
          </div>
          <div>
            <img src={Time} alt="" />
            <span className={Styles.text}>{item.workingHours}</span>
          </div>
        </div>
        <hr className={Styles.line} />
        <div className={Styles.foot}>
          <div className={Styles.app}>
            <p>10days ago</p>
            <p>Applicants</p>
          </div>
        </div>
      </div>

      <div className={Styles.lowestbox}>
        <div
          style={{
            marginLeft: "40px",
          }}
        >
          <p className={Styles.tit}>About company</p>
          <pre>{item.aboutCompany}</pre>

          <p className={Styles.tit}>Responsibility of student</p>
          <pre>{item.roleResponsibility}</pre>
          <p className={Styles.tit}>Who can apply</p>
          <p
            style={{
              fontSize: "16px",
            }}
          >
            Candidates who:
          </p>
          <pre>{item.jobDescription}</pre>
        </div>
        <button className={Styles.Apply}>Apply</button>
      </div>
    </React.Fragment>
  );
}

export default Jobtitleatcompany;
