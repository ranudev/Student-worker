import React from "react";
import styles from "../../Css/Skill/Skill.module.css";
import { useEffect } from "react";

const Skill = ({ skillDetail, setSkillDetail, setDisablebtn }) => {
  const validateForm = () => {
    const { skill1, skill2, skill3 } = skillDetail;
    return skill1 && skill2 && skill3;
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setSkillDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (typeof setDisablebtn === "function") {
      setDisablebtn(!validateForm());
    }
  }, [skillDetail, setDisablebtn]);
  return (
    <React.Fragment>
      <h2 className={styles.skills}>Skills</h2>

      <p className={styles.para}>
        Improve your job search by adding relevant skills
      </p>
      <div className={styles.box}>
        <div className={styles.innerbox}>
          <div>
            <label className={styles.tex1} htmlFor="">
              Skill1
            </label>
          </div>
          <div>
            <input
              className={styles.tex1}
              type="text"
              placeholder="Graphic design"
              name="skill1"
              value={skillDetail.skill1}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.innerbox}>
          <div>
            <label className={styles.tex1} htmlFor="">
              Skill2
            </label>
          </div>
          <div>
            <input
              className={styles.tex1}
              type="text"
              name="skill2"
              placeholder="Communication skills"
              value={skillDetail.skill2}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.innerbox}>
          <div>
            <label className={styles.tex1} htmlFor="">
              Skill3
            </label>
          </div>
          <div>
            <input
              className={styles.tex1}
              type="text"
              name="skill3"
              placeholder="Team work"
              value={skillDetail.skill3}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skill;
