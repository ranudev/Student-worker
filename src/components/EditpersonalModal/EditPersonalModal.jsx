import React from "react";
import styles from "../../Css/EditPersonalModal/EDitPersonalModal.module.css";

function EditPersonalModal() {
  return (
    <React.Fragment>
      <div className={styles.outmodalbox}>
        <div className={styles.modalbox}>
          <div></div>
          <div>
            <h2 className={styles.perdet}> Perosnal Details</h2>
          </div>
          <div>
            <label className={styles.name}>First name</label>
            <input className={styles.inpp} placeholder="Ayo" />
          </div>
          <div>
            <label className={styles.name}>Last name</label>
            <input className={styles.inpp} placeholder="David" />
          </div>
          <div>
            <label className={styles.name}>Mobile number</label>
            <input className={styles.inpp} placeholder="+123" />
            <input className={styles.inpp} placeholder="903340576" />
          </div>
          <div>
            <div>
              <label className={styles.name}>Current state</label>
              <input className={styles.inpp} placeholder="Lagos" />
            </div>
            <div>
              <label className={styles.name}>City</label>
              <input className={styles.inpp} placeholder="Apapa" />
            </div>
          </div>
        </div>
        <button>Update</button>
      </div>
    </React.Fragment>
  );
}

export default EditPersonalModal;
