import React from "react";
import styles from "../../Css/submitCard/SubmitCard.module.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SubmitCard() {
  return (
    <React.Fragment>
      <div className={styles.mainbx}>
        <div className={styles.upperbx}></div>
        <div className={styles.circle}>
          <FontAwesomeIcon className={styles.checkicon} icon={faCheck} />
        </div>
        <p>Your Application has been submitted!</p>
        <div className={styles.morejob}>
          <button className={styles.jobbtn}>Find more jobs</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SubmitCard;
