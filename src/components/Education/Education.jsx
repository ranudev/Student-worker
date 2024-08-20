import React from "react";
import style from "../../Css/Education/Education.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <React.Fragment>
      <div style={{}} className={style.parent}>
        <div className={style.Form}>
          <div className={style.icon}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <h3>Education</h3>

          <div className={style.labels}>
            <label htmlFor="">University</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="University of Lagos"
              className={style.university}
            />
          </div>
          <div className={style.labels}>
            <label htmlFor="">Course of Study</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Mechanical engineering"
              className={style.university}
            />
          </div>
          <div className={style.years}>
            <div>
              <label htmlFor="">Start Year</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="2020"
                className={style.year}
              />
            </div>
            <div>
              <label htmlFor="">End Year</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="2024"
                className={style.year}
              />
            </div>
          </div>
          <button className={style.update}>Update</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education;
