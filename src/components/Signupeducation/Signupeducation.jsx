//import React from 'react'

import React from "react";

import styles from "../../Css/Signupdetail/Signupdetail.module.css";

const Signupeducation = (prop) => {
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
                onChange={(event) => {
                  console.log("education..", event);
                  prop.setEducationDetail(event.target.value);
                }}
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
                onChange={(event) => {
                  console.log("education..", event);
                  prop.setEducationDetail(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>Start Year</label>
              <input
                className={styles.tex1}
                type="month"
                placeholder="2019"
                name=""
                id=""
                onChange={(event) => {
                  console.log("education..", event);
                  prop.setEducationDetail(event.target.value);
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>End Year</label>
              <input
                className={styles.tex1}
                type="month"
                placeholder="2022"
                name=""
                id=""
                onChange={(event) => {
                  console.log("education..", event);
                  prop.setEducationDetail(event.target.value);
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signupeducation;
