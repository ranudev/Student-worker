//import React from 'react'

//import Myapp from "../../Myapplication/Myapp";
import Signupdetailcard from "../Signupdetailcard/Signupdetailcard";
//import Myapp from "../../Myapplication/Myapp";

const Signuppersondetail = () => {
  return (
    <div>
      <Signupdetailcard
        text="Person Details"
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
        text6="Next"
      />

      {/* <Myapp /> */}
    </div>
  );
};

export default Signuppersondetail;
