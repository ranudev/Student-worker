//import React from 'react'

import { useNavigate } from "react-router-dom";
import Signupdetailcard from "../Signupdetailcard/Signupdetailcard";

const Signupeducation = () => {
  const navigate = useNavigate();
  const gotoskill = () => {
    navigate("/skill");
  };
  return (
    <div>
      <Signupdetailcard
        text="Education"
        fname="University"
        text1="University of Lagos"
        lname="Course of study"
        text2="Mechanical Engineer"
        text4="Start year"
        state="2019"
        text5="End year"
        city="2022"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {" "}
        <button
          style={{
            padding: "10px",
            width: "180px",
            fontSize: "1.8em",
            textAlign: "center",
            borderRadius: "3px",
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            gotoskill();
          }}
          style={{
            padding: "10px",
            width: "180px",
            backgroundColor: " rgb(10, 103, 79)",
            color: "white",
            fontSize: "1.8em",
            textAlign: "center",
            borderRadius: "3px",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Signupeducation;
