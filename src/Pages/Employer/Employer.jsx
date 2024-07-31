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
import style from "../../Css/Employer/Employer.module.css";
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

      <p className={style.Hire}>10,000+ Students Ready For Hire</p>

      <div className={style.Card2}>
        <Card2 img={Expnd} text="Expand your workforce" />
        <Card2 img={Imprv} text="Improve performance" />
        <Card2 img={Save} text="Save capital" />
      </div>

      <p className={style.steps}>Hire Students in 3 Steps</p>

      <div className={style.Rgister}>
        <img src={Register} alt="" />
        <h4>Register</h4>
        <p>Sign up on StudentWorker</p>
      </div>
      <div className={style.job}>
        <img src={Job} alt="" />
        <h4>Post Jobs</h4>
        <p>Easily post your jobs to students</p>
      </div>
      <div className={style.hire}>
        <img src={Hire} alt="" />
        <h4>Hire</h4>
        <p>Screen and employ the best</p>
      </div>

      <p className={style.top}>Top Employers Choose StudentWorker</p>

      <div className={style.arrow}>
        <img src={Leftarw} alt="" />
        <img src={Group} alt="" />
        <img src={abeg} alt="" />
        <img src={Alat} alt="" />
        <img src={Barter} alt="" />
        <img src={Rightarw} alt="" />
      </div>

      <button className={style.empsignup}> Employer signup</button>

      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Employer;
