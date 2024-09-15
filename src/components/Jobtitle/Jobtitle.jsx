import React from "react";
import location from "../../assets/Map.png";
import Globe from "../../assets/Globe.png";
import Money from "../../assets/Money.png";
import Time from "../../assets/Time.png";
import style from "../../Css/Jobtitle/Jobtitle.module.css";
import { useNavigate } from "react-router-dom";
function Jobtitle({ item }) {
  const navigate = useNavigate();
  const navigateDetailHandler = () => {
    navigate("/jobtitleatcompany", { state: item });
  };

  return (
    <React.Fragment>
      {/* <p className={style.num}>12,000 Jobs</p> */}
      <div className={style.mainbox}>
        <div className={style.title}>
          <h3>{item.jobTitle}</h3>
          <p>{item.companyName}</p>
        </div>
        <div className={style.icon}>
          <div>
            <img src={location} alt="" />
            <span>{item.state}</span>
          </div>

          <div>
            <img src={Globe} alt="" />
            <span>{item.location}</span>
          </div>
          <div>
            <img src={Money} alt="" />
            <span>{item.salary}</span>
          </div>
          <div>
            <img src={Time} alt="" />
            <span>{item.workingHours}</span>
          </div>
        </div>
        <hr className={style.line} />
        <div className={style.foot}>
          <div className={style.app}>
            <p>10days ago</p>
            <p> {item.applicantCount} Applicants</p>
          </div>

          <div className={style.det} onClick={navigateDetailHandler}>
            View Details
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Jobtitle;
