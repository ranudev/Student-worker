import React from "react";
//import Education from "../Education/Education";
// import "../../Css/Persondet/Persondetail.css";
import styles from "../../Css/Signupdetail/Signupdetail.module.css";

function Signupdetailcard(prop) {
  return (
    <React.Fragment>
      <h1 className={styles.header}>{prop.text}</h1>
      <div className={styles.outerbox}>
        <form>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.text}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={prop.fname}
                name=""
                id=""
                onChange={(event) => {
                  console.log("here.", event);
                  prop.setPersonalDetail(event.target.value);
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.text2}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={prop.lname}
                name=""
                id=""
                onChange={(event) => {
                  console.log("here.", event);
                  prop.setPersonalDetail(event.target.value);
                }}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroupSmall}>
              <label className={styles.tex1}>{prop.text3}</label>
              <input
                type="number"
                className={styles.tex}
                placeholder={prop.num}
                name=""
                id=""
                onChange={(event) => {
                  console.log("here.", event);
                  prop.setPersonalDetail(event.target.value);
                }}
              />
            </div>
            <div className={styles.inputGroupLarge}>
              <input
                className={styles.tex2}
                type="text"
                placeholder={prop.num1}
                name=""
                id=""
                onChange={(event) => {
                  console.log("here.", event);
                  prop.setPersonalDetail(event.target.value);
                }}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.text4}</label>
              <input
                type="text"
                placeholder={prop.state}
                name=""
                id=""
                onChange={(event) => {
                  console.log("here.", event);
                  prop.setPersonalDetail(event.target.value);
                }}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.text5}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={prop.city}
                name=""
                id=""
                onChange={(event) => {
                  console.log("here.", event);
                  prop.setPersonalDetail(event.target.value);
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Signupdetailcard;
