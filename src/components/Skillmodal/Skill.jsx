import React from "react";
import styles from "../../Css/Skill/Skill.module.css";

function Skill(prop) {
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
              value={prop.skillDetail.skill1}
              onChange={(event) => {
                const { name, value } = event.target;
                console.log(value);
                prop.setSkillDetail((prev) => ({
                  ...prev,
                  [name]: value,
                }));
              }}
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
              value={prop.skillDetail.skill2}
              onChange={(event) => {
                const { name, value } = event.target;
                console.log(value);
                prop.setSkillDetail((prev) => ({
                  ...prev,
                  [name]: value,
                }));
              }}
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
              value={prop.skillDetail.skill3}
              onChange={(event) => {
                const { name, value } = event.target;
                console.log(value);
                prop.setSkillDetail((prev) => ({
                  ...prev,
                  [name]: value,
                }));
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skill;
