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
                name="university"
                id=""
                value={prop.educationDetail.university}
                onChange={(event) => {
                  const { name, value } = event.target;
                  console.log(value);
                  prop.setEducationDetail((prev) => ({
                    ...prev,
                    [name]: value,
                  }));
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>Course of study</label>
              <input
                className={styles.tex1}
                type="text"
                placeholder=" Mec eng"
                name="course"
                id=""
                value={prop.educationDetail.course}
                onChange={(event) => {
                  const { name, value } = event.target;
                  console.log(value);
                  prop.setEducationDetail((prev) => ({
                    ...prev,
                    [name]: value,
                  }));
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
                name="startyear"
                id=""
                value={prop.educationDetail.startyear}
                onChange={(event) => {
                  const { name, value } = event.target;
                  console.log(value);
                  prop.setEducationDetail((prev) => ({
                    ...prev,
                    [name]: value,
                  }));
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>End Year</label>
              <input
                className={styles.tex1}
                type="month"
                placeholder="2022"
                name="endyear"
                id=""
                value={prop.educationDetail.endyear}
                onChange={(event) => {
                  const { name, value } = event.target;
                  console.log(value);
                  prop.setEducationDetail((prev) => ({
                    ...prev,
                    [name]: value,
                  }));
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
