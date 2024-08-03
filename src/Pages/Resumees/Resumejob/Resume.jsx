import React from "react";
import style from "../../../Css/Resumejob/Resumejob.module.css";
import pencil from "../../../assets/pencil.png";
//import Header3 from "../../Header/Header3/Header3";
//import Footer from "../../../components/Footer/Footer";
function Resumejob() {
  return (
    <React.Fragment>
      {/* <Header3 /> */}
      <div className={style.upper}>
        <div className={style.Upperbox}>
          <h4>Applying for Job title at Company</h4>
          <p>
            This is the resume that the employer will see , make <br /> sure it
            is up to date
          </p>
          <button>Confirm</button>
        </div>
      </div>
      <div className={style.resume}>
        <h4>Resume</h4>
      </div>

      <div className={style.box}>
        <div className={style.name}>
          <h2>
            Ayo David
            <span>
              <img src={pencil} />
            </span>{" "}
          </h2>
          <p>ayoda123@gmail.com</p>
          <p>098543457</p>
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
          <p className={style.pencil}>
            <img src={pencil} alt="" />
          </p>
        </div>
        <div className={style.skills}>
          <h5> Skills</h5>
          <p>
            Graphic design <br />
            Communication skills <br />
            Teamwork
          </p>
          <p className={style.pencil}>
            <img src={pencil} alt="" />
          </p>
        </div>
      </div>
      <div className={style.complete}>
        <button>Complete</button>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Resumejob;
