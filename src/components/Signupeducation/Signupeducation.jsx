//import React from 'react'

//import { useNavigate } from "react-router-dom";
import React from "react";
//import Education from "../Education/Education";
// import "../../Css/Persondet/Persondetail.css";
//import styles from "../../Css/signupseducation/signupeducation.module.css";
import styles from "../../Css/Signupdetail/Signupdetail.module.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faXmark } from "@fortawesome/free-solid-svg-icons";
//import { NavLink } from "react-router-dom";

const Signupeducation = () => {
  return (
    <React.Fragment>
      <h1 className={styles.header}>Education</h1>
      <div className={styles.outerbox}>
        <form>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>University</label>
              <input
                className={styles.tex1}
                type="text"
                placeholder="University of Lagos"
                name=""
                id=""
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>Course of study</label>
              <input
                className={styles.tex1}
                type="text"
                placeholder=" Mec eng"
                name=""
                id=""
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>Start Year</label>
              <input
                className={styles.tex1}
                type="text"
                placeholder="2019"
                name=""
                id=""
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>End Year</label>
              <input
                className={styles.tex1}
                type="text"
                placeholder="2022"
                name=""
                id=""
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signupeducation;
