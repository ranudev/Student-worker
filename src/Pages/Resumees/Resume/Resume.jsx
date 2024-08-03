import React from "react";
import style from "../../../Css/Resume/Resume.module.css";

import Footer from "../../../components/Footer/Footer";
import Header2 from "../../Header/Header2/Header2";

function Resume() {
  return (
    <React.Fragment>
      <Header2 />
      <hr />
      <div className={style.resume}>
        <h4>Resume</h4>
      </div>
      <div className={style.box}>
        <div className={style.name}>
          <h2>Ayo David</h2>
          <p>Appa , Lagos</p>
        </div>
        <hr />

        <div className={style.intro}>
          <h5> Education</h5>
          <p>
            Mechanical Engineer <br />
            <span>university of Lagos</span> <br />
            <span>2020-2021</span>
          </p>
        </div>
        <div className={style.skills}>
          <h5> Skills</h5>
          <p>
            Graphic design <br />
            Communication skills <br />
            Teamwork
          </p>
        </div>
        <div className={style.intro}>
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

        <div className={style.reject}>
          <a> Reject Applicant</a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Resume;
