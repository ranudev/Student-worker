import React from "react";
import styles from "../../Css/Skill/Skill.module.css";
import { useNavigate } from "react-router-dom";

function Skill() {
  const navigate = useNavigate();
  const gotores = () => {
    navigate("/resume2");
  };

  // const navigate =useNavigate();
  // const gotores= () ={
  //  navigate("/resume2")
  // }
  return (
    <React.Fragment>
      <h1>Skills</h1>

      <p className={styles.para}>
        Improve your job search byadding relevant skills
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {" "}
        <button
          style={{
            padding: "10px",
            width: "180px",
            fontSize: "1.8em",
            textAlign: "center",
            borderRadius: "3px",
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            gotores();
          }}
          style={{
            padding: "10px",
            width: "180px",
            backgroundColor: " rgb(10, 103, 79)",
            color: "white",
            fontSize: "1.8em",
            textAlign: "center",
            borderRadius: "3px",
          }}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
}

export default Skill;
