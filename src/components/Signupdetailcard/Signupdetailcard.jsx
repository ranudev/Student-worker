import React from "react";
//import Education from "../Education/Education";
// import "../../Css/Persondet/Persondetail.css";
import styles from "../../Css/Signupdetail/Signupdetail.module.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Signupdetailcard(prop) {
  const navigate = useNavigate();
  const gotoeduc = () => {
    navigate("/signupeducation");
  };
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

      <div className={styles.next}>
        <button
          className={styles.nextbtn}
          onClick={() => {
            gotoeduc();
          }}
        >
          {" "}
          {prop.text6}
        </button>
      </div>
    </React.Fragment>
  );
}

export default Signupdetailcard;

{
  /* <div className={styles.outerbox}>
        <form>
          <h1> Personal details</h1>
          <div>
            <div>
              <label>Fname</label>
              <input type="text" placeholder="Nmae.." name="" id="" />
              <div>
                <label>lname</label>
                <input type="text" placeholder="lname.." name="" id="" />
              </div>
            </div>
            <div>
              <label>Mobile number</label>
              <input type="text" placeholder="+234.." name="" id="" />
              <div>
                <input type="text" placeholder="080101010" name="" id="" />
              </div>
            </div>

            <div>
              <div>
                <label>Current state</label>
                <input type="text" placeholder="Lagos" name="" id="" />
              </div>
              <div>
                <label>City</label>
                <input type="text" placeholder="Apapa.." name="" id="" />
              </div>
            </div>
          </div>
        </form>
      </div> */
}
