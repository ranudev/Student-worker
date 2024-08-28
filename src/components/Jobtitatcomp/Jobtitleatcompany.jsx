import React from "react";
//import Jobtitle from "../Jobtitle/Jobtitle";
//import Header from "../Header/Header";
import Styles from "../../Css/jobtitleatcompany/JobTitleatCompany.module.css";
import location from "../../assets/Map.png";
import Globe from "../../assets/Globe.png";
import Money from "../../assets/Money.png";
import Time from "../../assets/Time.png";
// import { NavLink } from "react-router-dom";
//import { NavLink } from "react-router-dom";

function Jobtitleatcompany() {
  return (
    <React.Fragment>
      <hr />
      <p className={Styles.jobtitle}>Job Title at company</p>

      <div className={Styles.lowerbox}>
        <div className={Styles.title}>
          <h2 className={Styles.jbtit}>Job Title</h2>
          <p className={Styles.cmp}>Company</p>
        </div>
        <div className={Styles.icon}>
          <div>
            <img src={location} alt="" />
            <span className={Styles.text}>Location</span>
          </div>

          <div>
            <img src={Globe} alt="" />
            <span className={Styles.text}>Remote</span>
          </div>
          <div>
            <img src={Money} alt="" />
            <span className={Styles.text}>N20,000/mo</span>
          </div>
          <div>
            <img src={Time} alt="" />
            <span className={Styles.text}>24hrs/Week</span>
          </div>
        </div>
        <hr className={Styles.line} />
        <div className={Styles.foot}>
          <div className={Styles.app}>
            <p>10days ago</p>
            <p>12 Applicants</p>
          </div>
          <div className={Styles.det}>
            {" "}
            {/* <NavLink
              to="/jobtitleatcompany
            "
            > */}{" "}
            View Details
            {/* </NavLink> */}
          </div>
        </div>
      </div>
      <div className={Styles.lowestbox}>
        <p className={Styles.tit}>About company</p>
        <p>
          Company is the fastest-growing authentic directory that takes pride in
          connecting buyers and sellers across Nigeria and beyond. Our online
          outlet provides you with an uninterrupted shopping experience
        </p>

        <p className={Styles.tit}>Responsibility of student</p>
        <p>1.Prepare and develop tools</p>
        <p>2.Lead the entire student team</p>
        <p>3.Utilize backend stuff</p>
        <p>4.Design and code electrothings</p>

        <p className={Styles.tit}>Who can apply</p>
        <p>Candidates who:</p>
        <p>1.Are available for work for a duration of 3months</p>
        <p>2.Can start work between June 20 and June 23 2021</p>
        <p>3.Have relevant skills and interests</p>
        <p>4.Can cook stew</p>

        {/* <NavLink to="/resumejob"> */}
        <button className={Styles.Apply}>Apply</button>
        {/* </NavLink> */}
      </div>
    </React.Fragment>
  );
}

export default Jobtitleatcompany;
