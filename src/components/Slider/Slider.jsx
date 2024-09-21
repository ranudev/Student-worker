import React from "react";
import styles from "../../Css/Slider/Slider.module.css";
import { useNavigate } from "react-router-dom";
function Slider(prop) {
  const navigate = useNavigate();
  const goto = () => {
    navigate("/studsignup");
  };
  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <img src={prop.img} alt="pcimage" className={styles.pcimg} />

        <div className={styles.sliderbox}>
          <h4 className={styles.earn}>{prop.text1}</h4>

          <p className={styles.text}>
            {prop.text2}
            <br></br>
            {prop.text3}
          </p>
          <div className={styles.but}>
            <button
              className={styles.buton}
              onClick={() => {
                goto();
              }}
            >
              Student Signup
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Slider;
