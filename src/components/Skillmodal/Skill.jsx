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
        <div>
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
              onChange={(event) => {
                console.log(event);
                prop.setSkillDetail(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <label className={styles.tex1} htmlFor="">
              Skill2
            </label>
          </div>
          <div>
            <input
              className={styles.tex1}
              type="text"
              placeholder="Communication skills"
              onChange={(event) => {
                console.log(event);
                prop.setSkillDetail(event.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <label className={styles.tex1} htmlFor="">
              Skill3
            </label>
          </div>
          <div>
            <input
              className={styles.tex1}
              type="text"
              placeholder="Team work"
              onChange={(event) => {
                console.log(event);
                prop.setSkillDetail(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skill;
