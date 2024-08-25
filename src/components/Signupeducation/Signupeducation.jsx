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
      <h1>Education</h1>
      <div className={styles.outerbox}>
        <form>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label>University</label>
              <input
                type="text"
                placeholder="University of Lagos"
                name=""
                id=""
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Course of study</label>
              <input type="text" placeholder=" Mec eng" name="" id="" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label>Start Year</label>
              <input type="text" placeholder="2019" name="" id="" />
            </div>
            <div className={styles.inputGroup}>
              <label>End Year</label>
              <input type="text" placeholder="2022" name="" id="" />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signupeducation;
