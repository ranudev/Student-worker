import { useState } from "react";
import Signupdetailcard from "../Signupdetailcard/Signupdetailcard";
import Signupeducation from "../Signupeducation/Signupeducation";
import Skill from "../Skillmodal/Skill";
import ResumeCmp from "../../Pages/Resumees/ResumeCmp/ResumeCmp";
import styles from "../../Css/signuppersondetail/Signuppersondetail.module.css";

const Signuppersondetail = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [disableBtn, setDisableBtn] = useState(true);
  const [personalDetail, setPersonalDetail] = useState({
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
      header="Personal Details"
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
      personalDetail={personalDetail}
      setDisableBtn={setDisableBtn}
    />,
    <Signupeducation
      key="signupeducation"
      setEducationDetail={setEducationDetail}
      educationDetail={educationDetail}
      setDisableBtn={setDisableBtn}
    />,

    <Skill
      key="skill"
      setSkillDetail={setSkillDetail}
      skillDetail={skillDetail}
      setDisablebtn={setDisableBtn}
    />,
    <ResumeCmp
      key="resumecmp"
      personalDetail={personalDetail}
      skillDetail={skillDetail}
      educationDetail={educationDetail}
    />,
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const showCarouselNav = currentStep < steps.length - 1;

  return (
    <>
      {steps[currentStep]}

      {showCarouselNav && (
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
              onClick={() => handleStepClick(0)}
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                border: "1px grey",
                cursor: "pointer",
                backgroundColor:
                  currentStep === 0 ? "rgb(10, 103, 79)" : "grey",
              }}
            ></div>
            <div
              onClick={() => handleStepClick(1)}
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                border: "1px grey",
                cursor: "pointer",
                backgroundColor:
                  currentStep === 1 ? "rgb(10, 103, 79)" : "grey",
              }}
            ></div>
            <div
              onClick={() => handleStepClick(2)}
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                border: "1px grey",
                cursor: "pointer",
                backgroundColor:
                  currentStep === 2 ? "rgb(10, 103, 79)" : "grey",
              }}
            ></div>
          </div>

          <div className={styles.btn}>
            <div>
              {currentStep > 0 && currentStep !== steps.length - 1 && (
                <button onClick={handlePrevious} className={styles.prev}>
                  Previous
                </button>
              )}
            </div>

            <div>
              {currentStep < steps.length - 1 && (
                <button
                  onClick={handleNext}
                  className={styles.next}
                  disabled={disableBtn} // Button is disabled based on validation
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signuppersondetail;
