import React from "react";
//import Education from "../Education/Education";
// import "../../Css/Persondet/Persondetail.css";
import styles from "../../Css/Signupdetail/Signupdetail.module.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faXmark } from "@fortawesome/free-solid-svg-icons";
//import { NavLink } from "react-router-dom";

function Signupdetailcard(prop) {
  return (
    <React.Fragment>
      <h1>{prop.text}</h1>
      <div className={styles.outerbox}>
        <form>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label>{prop.tex1}</label>
              <input type="text" placeholder={prop.fname} name="" id="" />
            </div>
            <div className={styles.inputGroup}>
              <label>{prop.text2}</label>
              <input type="text" placeholder={prop.lname} name="" id="" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroupSmall}>
              <label>{prop.text3}</label>
              <input type="text" placeholder={prop.num} name="" id="" />
            </div>
            <div className={styles.inputGroupLarge}>
              <input type="text" placeholder={prop.num1} name="" id="" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label>{prop.text4}</label>
              <input type="text" placeholder={prop.state} name="" id="" />
            </div>
            <div className={styles.inputGroup}>
              <label>{prop.text5}</label>
              <input type="text" placeholder={prop.city} name="" id="" />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Signupdetailcard;
