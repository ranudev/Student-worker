import React from "react";
import style from "../../Css/Footer2/Footer2.module.css";

function Footer2() {
  return (
    <React.Fragment>
      <div className={style.footer}>
        <h3 className={style.worker}>
          StudentWorker <span>@ 2024</span>{" "}
        </h3>

        <p>About</p>
        <p>Privacy</p>
        <p>Terms and conditions</p>
      </div>
    </React.Fragment>
  );
}

export default Footer2;
