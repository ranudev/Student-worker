import { useEffect } from "react";
//import Education from "../Education/Education";
// import "../../Css/Persondet/Persondetail.css";
import styles from "../../Css/Signupdetail/Signupdetail.module.css";

const Signupdetailcard = ({
  personalDetail,
  setPersonalDetail,
  setDisableBtn,
  header,
  tex1,
  fname,
  text2,
  lname,
  text3,
  num,
  num1,
  text4,
  state,
  text5,
  city,
}) => {
  const validateForm = () => {
    const { firstName, lastName, mobileNo, city, state } = personalDetail;
    // Simple validation: check if all fields are filled
    return firstName && lastName && mobileNo && city && state;
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setPersonalDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (typeof setDisableBtn === "function") {
      setDisableBtn(!validateForm());
    }
  }, [personalDetail, setDisableBtn]);
  return (
    <>
      <h1 className={styles.header}>{header}</h1>
      <div className={styles.outerbox}>
        <form>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{tex1}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={fname}
                name="firstName"
                id=""
                value={personalDetail.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{text2}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={lname}
                name="lastName"
                id=""
                value={personalDetail.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroupSmall}>
              <label className={styles.tex1}>{text3}</label>
              <input
                type="tel"
                className={styles.tex}
                placeholder={num}
                name="mobileNo"
                id=""
                value={personalDetail.mobileNo}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroupLarge}>
              <input
                className={styles.tex2}
                type="tel"
                placeholder={num1}
                name="mobileNo"
                id=""
                value={personalDetail.num1}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{text4}</label>
              <input
                type="text"
                placeholder={state}
                name="state"
                id=""
                value={personalDetail.state}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{text5}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={city}
                name="city"
                id=""
                value={personalDetail.city}
                onChange={handleChange}
              />
            </div>
            {/* <div className={styles.buttonContainer}>
              <button disabled={setDisableBtn}>Next</button>
            </div> */}
          </div>
        </form>
      </div>
    </>
  );
};
export default Signupdetailcard;
