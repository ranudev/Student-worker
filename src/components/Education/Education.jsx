import React from "react";
import "../../Css/Education/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <React.Fragment>
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
          <h3>Education</h3>

          <div className="labels">
            <label htmlFor="">University</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="University of Lagos"
              style={{
                padding: "20px",
                width: "350px",
                height: "15px",
                borderRadius: "3px",
                border: "1px solid rgba(159, 125, 225, 0.5)",
              }}
            />
          </div>
          <div className="labels">
            <label htmlFor="">Course of Study</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Mechanical engineering"
              // style={{ width: "100px" }}
              style={{
                padding: "20px",
                width: "350px",
                height: "15px",
                borderRadius: "3px",
                border: "1px solid rgba(159, 125, 225, 0.5)",
              }}
            />
          </div>
          <div className="year">
            <div>
              <label htmlFor="">Start Year</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="2020"
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
              <label htmlFor="">End Year</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="2024"
                style={{
                  height: "40px",
                  width: "150px",
                  borderRadius: "3px",
                  border: "1px solid rgba(159, 125, 225, 0.5)",
                  fontSize: "20px",
                  padding: "20px",
                }}
              />
            </div>
          </div>
          <button className="update">Update</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education;
