import { useState } from "react";
import Signupdetailcard from "../Signupdetailcard/Signupdetailcard";
import Signupeducation from "../Signupeducation/Signupeducation";
import Skill from "../Skillmodal/Skill";
import ResumeCmp from "../../Pages/Resumees/ResumeCmp/ResumeCmp";
import styles from "../../Css/signuppersondetail/Signuppersondetail.module.css";

const Signuppersondetail = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [PersonalDeatil, setPersonalDetail] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    city: "",
    state: "",
  });

  const [educationDetail, setEducationDetail] = useState({
    university: "",
    course: "",
    startyear: "",
    endyear: "",
  });

  const [skillDetail, setSkillDetail] = useState({
    skill1: "",
    skill2: "",
    skill3: "",
  });

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
      setPersonalDetail={setPersonalDetail}
    />,
    <Signupeducation
      key="signupeducation"
      setEducationDetail={setEducationDetail}
    />,
    <Skill key="skill" setSkillDetail={setSkillDetail} />,
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            border: "1px gery",
            cursor: "pointer",
            backgroundColor: currentStep == 0 ? " rgb(95, 39, 205)" : "grey",
          }}
        ></div>
        <div
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            border: "1px gery",
            cursor: "pointer",
            backgroundColor: currentStep == 1 ? " rgb(95, 39, 205)" : "grey",
          }}
        ></div>
        <div
          style={{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            border: "1px gery",
            cursor: "pointer",
            backgroundColor: currentStep == 2 ? " rgb(95, 39, 205)" : "grey",
          }}
        ></div>
      </div>
      {steps[currentStep]}

      <div className={styles.btn}>
        {currentStep > 0 && currentStep !== steps.length - 1 && (
          <button onClick={handlePrevious} className={styles.prev}>
            Previous
          </button>
        )}
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
