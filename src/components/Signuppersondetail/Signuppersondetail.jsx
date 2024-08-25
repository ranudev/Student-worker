//import React from 'react'

//import Myapp from "../../Myapplication/Myapp";
//import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Signupdetailcard from "../Signupdetailcard/Signupdetailcard";
import Signupeducation from "../Signupeducation/Signupeducation";
import Skill from "../Skillmodal/Skill";
//import Myapp from "../../Myapplication/Myapp";

const Signuppersondetail = () => {
  return (
    <div>
      <Signupdetailcard
        text="Personal Details"
        fname="Ayo"
        text1="First Name"
        lname="David"
        text2="Last Name"
        num="+123"
        text3="Mobile number"
        num1="0081034"
        text4="Current state"
        state="Lagos"
        text5="city"
        city="Apapa"
      />

      <Signupeducation />
      <Skill />
      <button>
        {" "}
        <NavLink to="/resumejob">Next</NavLink>
      </button>

      {/* <Myapp /> */}
    </div>
  );
};

export default Signuppersondetail;
