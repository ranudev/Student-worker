import React from "react";
import style from "../../../Css/Resumejob/Resumejob.module.css";
import pencil from "../../../assets/pencil.png";
import { NavLink } from "react-router-dom";
//import Header3 from "../../Header/Header3/Header3";
//import Footer from "../../../components/Footer/Footer";

const ResumeCmp = () => {
  return (
    <React.Fragment>
      <div className={style.resume}>
        <h4>Resume</h4>
      </div>

      <div className={style.box}>
        <div className={style.name}>
          <h2>
            Ayo David
            <span>
              <img className={style.pen} src={pencil} />
            </span>{" "}
          </h2>
          <p>ayoda123@gmail.com</p>
          <p>098543457</p>
          <p>Appa , Lagos</p>
        </div>
        <hr className={style.line} />

        <div className={style.intro}>
          <div>
            <h5> Education</h5>
          </div>
          <div>
            <p>
              Mechanical Engineer <br />
              <span>university of Lagos</span> <br />
              <span>2020-2021</span>
            </p>
          </div>
          <div>
            <p className={style.pencil}>
              <img className={style.pen} src={pencil} alt="" />
            </p>
            ;
          </div>
        </div>
        <div className={style.skills}>
          <div>
            <h5> Skills</h5>
          </div>
          <div>
            <p>
              Graphic design <br />
              Communication skills <br />
              Teamwork
            </p>
          </div>
          <div>
            <p className={style.pencil}>
              <img className={style.pen} src={pencil} alt="" />
            </p>
          </div>
        </div>
      </div>
      <div className={style.complete}>
        <button className={style.cmp}>
          <NavLink to="/job">Complete</NavLink>
        </button>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default ResumeCmp;
