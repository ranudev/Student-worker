import React from "react";
import Slider from "../../components/Slider/Slider";
import Employ from "../../assets/employer.png";
import Card2 from "../../components/studentcard/Card2";
import Expnd from "../../assets/Expnd.png";
import Imprv from "../../assets/Imprv.png";
import Save from "../../assets/Save.png";
import Register from "../../assets/Register.png";
import Job from "../../assets/Job.png";
import Hire from "../../assets/Hire.png";
import Leftarw from "../../assets/Leftarw.png";
import Group from "../../assets/Group.png";
import abeg from "../../assets/abeg.png";
import Alat from "../../assets/Alat.png";
import Barter from "../../assets/Barter.png";
import Rightarw from "../../assets/Rightarw.png";
import "../../Css/Employer/Employer.css";
//import Footer from "../../components/Footer/Footer";
//import Header from "../../components/Header/Header";

function Employer() {
  return (
    <React.Fragment>
      {/* <Header /> */}

      <Slider
        img={Employ}
        text1="More work done. For less!"
        text2="Hire job ready students and spend less on your workforce"
      />

      <p
        style={{
          textAlign: "center",
          marginTop: "90px",
          marginBottom: "99px",
          fontWeight: "400",
          margin: "auto",
          fontSize: "27px",
          color: "rgb(31, 19, 91)",

          lineHeight: " 31.64px",
        }}
      >
        10,000+ Students Ready For Hire
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Card2 img={Expnd} text="Expand your workforce" />
        <Card2 img={Imprv} text="Improve performance" />
        <Card2 img={Save} text="Save capital" />
      </div>

      <p
        style={{
          marginTop: "150px",
          marginBottom: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          fontWeight: "700",
          margin: "auto",
          color: "rgb(31, 19, 91)",
          fontSize: "35px",
          textShadow: " 2px 2px rgb(31, 19, 91)",
        }}
      >
        Hire Students in 3 Steps
      </p>

      <div
        style={{
          borderRadius: "5px",
          //display: "flex",
          //flexDirection: "column",
          //alignItems: "flex-end",
          // justifyContent: "center",
          marginLeft: "20%",
        }}
      >
        <img src={Register} alt="" />
        <h4>Register</h4>
        <p style={{ color: "rgb(31, 19, 91)" }}>Sign up on StudentWorker</p>
      </div>
      <div
        style={{
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          marginRight: "17%",
          textAlign: "left",
        }}
      >
        <img src={Job} alt="" />
        <h4 style={{ alignSelf: "end", marginRight: "12%" }}>Post Jobs</h4>
        <p style={{ marginRight: "-1%", color: "rgb(31, 19, 91)" }}>
          Easily post your jobs to students
        </p>
      </div>
      <div
        style={{
          marginTop: "40px",
          borderRadius: "5px",
          //display: "flex",
          // flexDirection: "column",
          //   //alignItems: "flex-end",
          //   justifyContent: "center",
          marginLeft: "20%",
        }}
      >
        <img src={Hire} alt="" />
        <h4>Hire</h4>
        <p style={{ color: "rgb(31, 19, 91)" }}>Screen and employ the best</p>
      </div>

      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "56px",
          marginTop: "156px",
          fontSize: "27px",
          fontWeight: "400",
        }}
      >
        Top Employers Choose StudentWorker
      </p>

      <div
        style={{
          display: "flex",
          gap: "60px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Leftarw} alt="" />
        <img src={Group} alt="" />
        <img src={abeg} alt="" />
        <img src={Alat} alt="" />
        <img src={Barter} alt="" />
        <img src={Rightarw} alt="" />
      </div>

      <button className="empsignup"> Employer signup</button>

      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Employer;
