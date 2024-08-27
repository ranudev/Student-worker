import React from "react";
import styles from "../../Css/Skill/Skill.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
//import { useNavigate } from "react-router-dom";

function Skill() {
  return (
    <React.Fragment>
      {/* <div className={styles.cross}>
        <FontAwesomeIcon icon={faXmark} />
      </div> */}
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
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skill;
