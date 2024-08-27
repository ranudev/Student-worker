// //import React from 'react'

// //import Myapp from "../../Myapplication/Myapp";
// //import { NavLink } from "react-router-dom";
// //import { NavLink } from "react-router-dom";
// import Signupdetailcard from "../Signupdetailcard/Signupdetailcard";
// import Signupeducation from "../Signupeducation/Signupeducation";
// import Skill from "../Skillmodal/Skill";
// import ResumeCmp from "../../Pages/Resumees/ResumeCmp/ResumeCmp";
// import styles from "../../Css/signuppersondetail/Signuppersondetail.module.css";
// import EditPersonalModal from "../EditpersonalModal/EditPersonalModal";
// //import { useState } from "react";
// //import ResumeCmp from "../../Pages/Resumees/ResumeCmp/ResumeCmp";
// //import Myapp from "../../Myapplication/Myapp";

// const Signuppersondetail = () => {
//   return (
//     <div>
//       <Signupdetailcard
//         text="Personal Details"
//         fname="Ayo"
//         tex1="First Name"
//         lname="David"
//         text2="Last Name"
//         num="+123"
//         text3="Mobile number"
//         num1="0081034"
//         text4="Current state"
//         state="Lagos"
//         text5="city"
//         city="Apapa"
//       />
//       <div className={styles.btn}>
//         <button className={styles.next}> Next</button>
//       </div>

//       <Signupeducation />
//       <Skill />
//       <ResumeCmp />
//       <EditPersonalModal />

//       {/* <Myapp /> */}
//     </div>
//   );
// };

// export default Signuppersondetail;

import { useState } from "react";
import Signupdetailcard from "../Signupdetailcard/Signupdetailcard";
import Signupeducation from "../Signupeducation/Signupeducation";
import Skill from "../Skillmodal/Skill";
import ResumeCmp from "../../Pages/Resumees/ResumeCmp/ResumeCmp";
import styles from "../../Css/signuppersondetail/Signuppersondetail.module.css";

const Signuppersondetail = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <Signupdetailcard
      key="signupdetailcard"
      text="Personal Details"
      fname="Ayo"
      tex1="First Name"
      lname="David"
      text2="Last Name"
      num="+123"
      text3="Mobile number"
      num1="0081034"
      text4="Current state"
      state="Lagos"
      text5="city"
      city="Apapa"
    />,
    <Signupeducation key="signupeducation" />,
    <Skill key="skill" />,
    <ResumeCmp key="resumecmp" />,
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div>
      {/* Render the current component based on currentStep state */}
      {steps[currentStep]}

      {/* Navigation buttons */}
      <div className={styles.btn}>
        {/* Show the "Previous" button only if not on the first step and not on ResumeCmp */}
        {currentStep > 0 && currentStep !== steps.length - 1 && (
          <button onClick={handlePrevious} className={styles.prev}>
            Previous
          </button>
        )}
        {/* Show the "Next" button only if not on the last step */}
        {currentStep < steps.length - 1 && (
          <button onClick={handleNext} className={styles.next}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Signuppersondetail;
