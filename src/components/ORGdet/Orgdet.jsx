import React from "react";
//import Header3 from "./Pages/Header/Header3/Header3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
//import Header2 from "../../Pages/Header/Header2/Header2";
import style from "../../Css/Orgdet/Orgdet.module.css";
//import Footer from "../../components/Footer/Footer";

function Orgdet() {
  return (
    <React.Fragment>
      {/* <Header2 /> */}
      <div className={style.header}>
        <h3>Organization Details</h3>
      </div>
      <div className={style.box}>
        <div className={style.lebinp}>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="company" className={style.orginp} />
          </div>

          <div>
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              rows="5"
              placeholder="Company is the fastest-growing authentic directory that takes pride in connecting buyers and sellers across Nigeria and beyond. Our online outlet provides you with an uninterrupted shopping experience"
              className={style.orginp}
            />
          </div>
          <div>
            <label htmlFor="">Adress</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="36 Adeola Odeku St, Victoria Island 100246"
              className={style.orginp}
            />
          </div>
          <div>
            <label htmlFor=""> State</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Lagao"
              className={style.orginp}
            />
          </div>
        </div>
      </div>
      <div className={style.lower}>
        <div className={style.circles}>
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className={style.btn}>
          <button className={style.prev}> Previous</button>
          <button className={style.prev}>Next</button>
        </div>
        <div className={style.link}>
          <a> Skip</a>
        </div>
      </div>

      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Orgdet;
