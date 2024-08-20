import React from "react";
import styles from "../../Css/Skill/Skill.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//import { useNavigate } from "react-router-dom";

function Skill() {
  // const navigate = useNavigate();
  // const gotores = () => {
  //   navigate("/resume2");
  // };

  // const navigate =useNavigate();
  // const gotores= () ={
  //  navigate("/resume2")
  // }
  return (
    <React.Fragment>
      <div className={styles.cross}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <h2>Skills</h2>

      <p className={styles.para}>
        Improve your job search by adding <br />
        relevant skills
      </p>
      <div className={styles.box}>
        <div>
          <div>
            <label htmlFor="">Skill1</label>
          </div>
          <div>
            <input type="text" placeholder="Graphic design" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">Skill2</label>
          </div>
          <div>
            <input type="text" placeholder="Communication skills" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">Skill3</label>
          </div>
          <div>
            <input type="text" placeholder="Team work" />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        {" "}
        <button className={styles.prevbtn}>Previous</button>
        <button
          // onClick={() => {
          //   gotores();
          // }}
          className={styles.nxtbtn}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
}

export default Skill;
