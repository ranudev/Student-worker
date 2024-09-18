import { useEffect } from "react";
//import Education from "../Education/Education";
// import "../../Css/Persondet/Persondetail.css";
import styles from "../../Css/Signupdetail/Signupdetail.module.css";

const Signupdetailcard = ({
  personalDetail,
  setPersonalDetail,
  setDisableBtn,
  prop,
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
    setDisableBtn(!validateForm());
  }, [personalDetail, setDisableBtn]);
  return (
    <>
      <h1 className={styles.header}>{prop.header}</h1>
      <div className={styles.outerbox}>
        <form>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.tex1}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={prop.fname}
                name="firstName"
                id=""
                value={personalDetail.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.text2}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={prop.lname}
                name="lastName"
                id=""
                value={personalDetail.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroupSmall}>
              <label className={styles.tex1}>{prop.text3}</label>
              <input
                type="tel"
                className={styles.tex}
                placeholder={prop.num}
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
                placeholder={prop.num1}
                name="mobileNo"
                id=""
                value={personalDetail.num1}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.text4}</label>
              <input
                type="text"
                placeholder={prop.state}
                name="state"
                id=""
                value={personalDetail.state}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>{prop.text5}</label>
              <input
                type="text"
                className={styles.tex1}
                placeholder={prop.city}
                name="city"
                id=""
                value={personalDetail.city}
                onChange={handleChange}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button disabled={setDisableBtn}>Next</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signupdetailcard;
