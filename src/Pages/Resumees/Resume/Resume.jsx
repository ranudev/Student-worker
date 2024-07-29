import React from "react";
import "../../../Css/Resume/Resume.css";

import Footer from "../../../components/Footer/Footer";
import Header2 from "../../Header/Header2/Header2";

function Resume() {
  return (
    <React.Fragment>
      <Header2 />
      <hr style={{ color: " rgb(0, 0, 0)" }} />
      <div className="resume">
        <h4>Resume</h4>
      </div>
      <div className="box">
        <div className="name">
          <h2>Ayo David</h2>
          <p>Appa , Lagos</p>
        </div>
        <hr />

        <div className="intro">
          <h5> Education</h5>
          <p>
            Mechanical Engineer <br />
            <span>university of Lagos</span> <br />
            <span>2020-2021</span>
          </p>
        </div>
        <div className="skills">
          <h5> Skills</h5>
          <p>
            Graphic design <br />
            Communication skills <br />
            Teamwork
          </p>
        </div>
        <div className="intro">
          <h5> Contact</h5>
          <div>
            <p>
              <strong>Email:</strong>ayoda@gmail.com
            </p>{" "}
            <br />
            <p>
              <strong>Phone:</strong>0909466247
            </p>
          </div>
        </div>

        <div className="reject">
          <a> Reject Applicant</a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Resume;
