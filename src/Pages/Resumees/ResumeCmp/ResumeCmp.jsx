import React from "react";
import style from "../../../Css/Resumejob/Resumejob.module.css";
import pencil from "../../../assets/pencil.png";
import { NavLink, useNavigate } from "react-router-dom";
//import Header3 from "../../Header/Header3/Header3";
//import Footer from "../../../components/Footer/Footer";

const ResumeCmp = (props) => {
  const navigate = useNavigate();
  const navigateOnJobHandler = () => {
    navigate("/job");
  };
  const { personalDetail, educationDetail, skillDetail } = props;
  return (
    <React.Fragment>
      <div className={style.resume}>
        <h4>Resume</h4>
      </div>

      <div className={style.box}>
        <div className={style.name}>
          <h2>
            {personalDetail.firstName}
            {personalDetail.lastName}
            <span>
              <img className={style.pen} src={pencil} />
            </span>{" "}
          </h2>
          {/* <p>ayoda123@gmail.com</p>
          <p>098543457</p>
          <p>Appa , Lagos</p> */}

          {personalDetail.mobileNo}
          <pre>
            {personalDetail.state},{personalDetail.city}
          </pre>
        </div>
        <hr className={style.line} />

        <div className={style.intro}>
          <div>
            <h5> Education</h5>
          </div>
          <div>
            <pre>
              {educationDetail.university}
              {educationDetail.course}

              {educationDetail.startyear}

              {educationDetail.endyear}
            </pre>
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
            {skillDetail.skill1}
            {skillDetail.skill2}

            {skillDetail.skill3}
          </div>
          <div>
            <p className={style.pencil}>
              <img className={style.pen} src={pencil} alt="" />
            </p>
          </div>
        </div>
      </div>
      <div className={style.complete}>
        <button className={style.cmp} onClick={navigateOnJobHandler}>
          Complete
        </button>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default ResumeCmp;
