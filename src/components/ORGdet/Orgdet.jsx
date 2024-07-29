import React from "react";
//import Header3 from "./Pages/Header/Header3/Header3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Header2 from "../../Pages/Header/Header2/Header2";
import "../../Css/Orgdet/Orgdet.css";
import Footer from "../../components/Footer/Footer";

function Orgdet() {
  return (
    <React.Fragment>
      <Header2 />
      <div className="header">
        <h3>Organization Details</h3>
      </div>
      <div className="box">
        <div>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="company" />
          </div>

          <div>
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Company is the fastest-growing authentic directory that takes pride in connecting buyers and sellers across Nigeria and beyond. Our online outlet provides you with an uninterrupted shopping experience"
            />
          </div>
          <div>
            <label htmlFor="">Adress</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="36 Adeola Odeku St, Victoria Island 100246"
            />
          </div>
          <div>
            <label htmlFor=""> State</label>
            <input type="text" name="" id="" placeholder="Lagao" />
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="circles">
          <FontAwesomeIcon icon={faCircle} style={{}} />
          <FontAwesomeIcon icon={faCircle} />
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="btn">
          <button> Previous</button>
          <button>Next</button>
        </div>
        <div className="link">
          <a> Skip</a>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Orgdet;
