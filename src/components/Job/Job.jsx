import React from "react";
//import Header from "../Header/Header";
import Search from "../../assets/Search.png";
import "../../Css/Job/Job.css";
import filter from "../../assets/filter.png";
import ilter from "../../assets/ilter.png";
import Jobtitle from "../Jobtitle/Jobtitle";
//import Footer from "../Footer/Footer";
function Job() {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <div className="job">
        <div>
          <p className="title">Title/Keyword/Text</p>
          <div className="input">
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
            <div className="srchicon">
              <img src={Search} alt="" />
            </div>
          </div>
        </div>
        {/* filter */}

        {/* FILTER BOX */}

        <div className="parent">
          <div className="left">
            <div className="filter">
              <img src={filter} alt="" />{" "}
              <span>
                <img src={ilter} alt="" />
              </span>
            </div>

            <div className="Filterbox">
              <p>Narrow your results</p>
              <hr style={{ width: "90%" }} />
              <label className="location">Location:</label>

              <select
                style={{
                  width: "45%",
                  borderRadius: "2px",
                  color: "rgba(0, 0, 0, 0.9) ",
                }}
              >
                <optgroup>
                  <option>All</option>
                  <option></option>
                  <option></option>
                  <option></option>
                </optgroup>
              </select>
              <div className="labe">
                <label
                  htmlFor=""
                  style={{ fontSize: "25px", color: "rgba(0, 0, 0, 0.9)" }}
                >
                  Job type:
                </label>
                <input type="checkbox" id="" name="" value="" />
                <label className="site"> on site</label>
                <br />
                <input type="checkbox" id="" name="" value="" />
                <label className="site"> Remote</label>
              </div>
              <br />

              <button className="apply">Apply</button>
            </div>
          </div>
        </div>
        <div className="num">
          <span className="nums">12,000 jobs</span>
          <Jobtitle />
          <Jobtitle />
          <Jobtitle />
          <Jobtitle />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Job;
