import React from "react";
//import Education from "../Education/Education";
import "../../Css/Persondet/Persondetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Persondetail() {
  return (
    <React.Fragment>
      <form>
        <div
          style={{
            backgroundColor: "rgb(229,229,229)",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="Form">
            <div className="icon">
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <h3>Person Details</h3>

            <div className="labels">
              <label htmlFor="">First name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Ayo"
                style={{
                  fontSize: "20px",
                  padding: "20px",
                  width: "350px",
                  height: "15px",
                  borderRadius: "3px",
                  border: "1px solid rgba(159, 125, 225, 0.5)",
                }}
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
                style={{
                  fontSize: "20px",
                  padding: "20px",
                  width: "350px",
                  height: "15px",
                  borderRadius: "3px",
                  border: "1px solid rgba(159, 125, 225, 0.5)",
                }}
              />
            </div>
            <div className="labels">
              <label htmlFor="">Mobile number</label>
              <div className="tel">
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="David"
                  // style={{ width: "100px" }}
                  style={{
                    padding: "20px",
                    fontSize: "20px",
                    width: "73px",
                    height: "15px",
                    borderRadius: "3px",
                    border: "1px solid rgba(159, 125, 225, 0.5)",
                  }}
                />
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="David"
                  // style={{ width: "100px" }}
                  style={{
                    padding: "20px",
                    fontSize: "20px",
                    width: "259px",
                    height: "15px",
                    borderRadius: "3px",
                    border: "1px solid rgba(159, 125, 225, 0.5)",
                  }}
                />
              </div>
            </div>
            <div className="year">
              <div>
                <label htmlFor="">Current state</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Lagos"
                  style={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "3px",
                    border: "1px solid rgba(159, 125, 225, 0.5)",
                    fontSize: "20px",
                    padding: "10px",
                  }}
                />
              </div>
              <div>
                <label htmlFor="">City</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Apapa"
                  style={{
                    height: "40px",
                    width: "150px",
                    borderRadius: "3px",
                    border: "1px solid rgba(159, 125, 225, 0.5)",
                    fontSize: "20px",
                    padding: "11px",
                  }}
                />
              </div>
            </div>
            <button className="update">Update</button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Persondetail;
