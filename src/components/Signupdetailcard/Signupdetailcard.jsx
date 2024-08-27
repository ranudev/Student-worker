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
              <label className={styles.tex1}>{prop.tex1}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={prop.fname}
                name=""
                id=""
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
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroupSmall}>
              <label className={styles.tex1}>{prop.text3}</label>
              <input
                type="text"
                className={styles.tex}
                placeholder={prop.num}
                name=""
                id=""
              />
            </div>
            <div className={styles.inputGroupLarge}>
              <input
                className={styles.tex2}
                type="text"
                placeholder={prop.num1}
                name=""
                id=""
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.text4}</label>
              <input type="text" placeholder={prop.state} name="" id="" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.text5}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={prop.city}
                name=""
                id=""
              />
            </div>
          </div>
        </form>
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
