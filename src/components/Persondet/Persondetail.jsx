import React from "react";
//import Education from "../Education/Education";
import style from "../../Css/Persondet/Persondetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Persondetail() {
  return (
    <React.Fragment>
      <form>
        <div className={style.container}>
          <div className={style.Form}>
            <div className={style.icones}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <h3>Person Details</h3>

            <div className={style.labels}>
              <label htmlFor="">First name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ayo"
                className={style.Fname}
              />
            </div>
            <div className="labels">
              <label htmlFor="">Last name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="David"
                // style={{ width: "100px" }}
                className={style.Fname}
              />
            </div>
            <div className={style.labels}>
              <label htmlFor="">Mobile number</label>
              <div className={style.tel}>
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="David"
                  className={style.Mob}
                />
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="David"
                  className={style.tell}
                />
              </div>
            </div>
            <div className={style.year}>
              <div>
                <label htmlFor="">Current state</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Lagos"
                  className={style.state}
                />
              </div>
              <div>
                <label htmlFor="">City</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Apapa"
                  className={style.city}
                />
              </div>
            </div>
            <button className={style.update}>Update</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Persondetail;
