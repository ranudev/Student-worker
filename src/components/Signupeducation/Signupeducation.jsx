import React, { useEffect, useState } from "react";
import styles from "../../Css/Signupdetail/Signupdetail.module.css";

const Signupeducation = ({
  educationDetail,
  setEducationDetail,
  setDisableBtn,
}) => {
  const [errors, setErrors] = useState({
    startyear: "",
    endyear: "",
  });

  const validateYears = () => {
    const { startyear, endyear } = educationDetail;
    let isValid = true;
    const newErrors = { startyear: "", endyear: "" };

    if (!startyear) {
      newErrors.startyear = "Start year is required";
      isValid = false;
    }

    if (!endyear) {
      newErrors.endyear = "End year is required";
      isValid = false;
    }

    if (startyear && endyear && startyear > endyear) {
      newErrors.endyear =
        "End year must be later than or equal to the start year";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateForm = () => {
    const { university, course } = educationDetail;
    return university && course && validateYears();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducationDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (typeof setDisableBtn === "function") {
      setDisableBtn(!validateForm());
    }
  }, [educationDetail, setDisableBtn]);

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
                value={educationDetail.university}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>Course of study</label>
              <input
                className={styles.tex1}
                type="text"
                placeholder="Mechanical Engineering"
                name="course"
                value={educationDetail.course}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>Start Year</label>
              <input
                className={styles.tex1}
                type="month"
                name="startyear"
                value={educationDetail.startyear}
                onChange={handleChange}
              />
              {errors.startyear && (
                <span style={{ color: "red", marginTop: "10px" }}>
                  {errors.startyear}
                </span>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.tex1}>End Year</label>
              <input
                className={styles.tex1}
                type="month"
                name="endyear"
                value={educationDetail.endyear}
                onChange={handleChange}
              />
              {errors.endyear && (
                <span style={{ color: "red", marginTop: "10px" }}>
                  {errors.endyear}
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signupeducation;
