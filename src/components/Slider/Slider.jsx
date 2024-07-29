import React from "react";
import "../../Css/Slider/Slider.css";
import { useNavigate } from "react-router-dom";
function Slider(prop) {
  const navigate = useNavigate();
  const goto = () => {
    navigate("/studsignup");
  };
  return (
    <React.Fragment>
      <div style={{ position: "relative" }}>
        <img
          src={prop.img}
          alt="pcimage"
          style={{ height: "497px", width: "100%" }}
        />

        <div
          style={{
            position: "absolute",
            top: "142px ",
            left: "488px",
            right: "489px",
            display: "flex",
            justifyContent: " center",
            alignItems: " center",
            flexDirection: "column",
          }}
        >
          <h4 className="earn">{prop.text1}</h4>

          <p className="text">
            {prop.text2}
            <br></br>
            {prop.text3}
          </p>
          <div>
            <button
              className="student
          "
              onClick={() => {
                goto();
              }}
            >
              Student signup
              {/* <NavLink to="/studentsignup">Student Signup</NavLink> */}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Slider;
