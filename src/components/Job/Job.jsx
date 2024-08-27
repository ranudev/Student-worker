import React from "react";
//import Header from "../Header/Header";
import Search from "../../assets/Search.png";
import style from "../../Css/Job/Job.module.css";
import filter from "../../assets/filter.png";
import ilter from "../../assets/ilter.png";
import Jobtitle from "../Jobtitle/Jobtitle";
//import Footer from "../Footer/Footer";
function Job() {
  return (
    <React.Fragment>
      {/* <Header /> */}

      {/* filter */}
      <div className={style.inp}>
        <p className={style.title}>Title/Keyword/Text</p>
        <div className={style.input}>
          <input
            type="text"
            placeholder="ui/ux Design"
            style={{
              textAlign: "left",
              width: "514.47px",
              height: "41px",
              borderColor: " 2px solid rgb(10, 103, 79)",
            }}
          />

          {/* Searh icon */}
          <div className={style.srchicon}>
            <img src={Search} alt="" />
          </div>
        </div>
      </div>
      {/* FILTER BOX */}
      <div className={style.job}>
        <div>
          <div className={style.filter}>
            <img src={filter} alt="" />
            <span>
              <img src={ilter} alt="" />
            </span>
          </div>

          <div className={style.Filterbox}>
            <p>Narrow your results</p>
            <hr className={style.filline} />
            <div className={style.location}>
              <label className={style.site}>Location:</label>

              <select className={style.optgrp}>
                <optgroup>
                  <option>All</option>
                  <option></option>
                  <option></option>
                  <option></option>
                </optgroup>
              </select>
            </div>

            <div className={style.labe}>
              <label htmlFor="" className={style.site}>
                Job type:
              </label>
              <div className={style.check}>
                <div
                  style={{
                    marginRight: "20px",
                  }}
                >
                  <input type="checkbox" id="" name="" value="" />
                  <label className={style.site}> on-site</label>
                </div>
                <div>
                  <input type="checkbox" id="" name="" value="" />
                  <label className={style.site}> Remote</label>
                </div>
              </div>
            </div>

            <button className={style.apply}>Apply</button>
          </div>
        </div>

        <div className={style.jobttljob}>
          <Jobtitle />
          {/* <Jobtitle />
          <Jobtitle />
          <Jobtitle /> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Job;
