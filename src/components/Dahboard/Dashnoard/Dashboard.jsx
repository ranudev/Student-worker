import React from "react";
import Header2 from "../../../Pages/Header/Header2/Header2";
import style from "../../../Css/Dashboard/Dashboard.module.css";
import Footer from "../../../components/Footer/Footer";

function Dashboard() {
  return (
    <React.Fragment>
      <Header2 />
      <hr />
      <div className={style.header}>
        <h3> Dashboard</h3>
      </div>
      <div className={style.title}>
        <p>
          job Title: <span>Posted</span>
        </p>
      </div>
      <div className={style.sec}>
        <p>Applicant</p>
        <p>Role</p>-<p>Applied</p>
        <p>Resume</p>
      </div>
      <div className={style.third}>
        <p>Ayo David</p>
        <p>Job Title</p>
        <p>Today</p>
        <p>View</p>
      </div>
      <hr />
      <div className={style.btn}>
        <button>Review Job Post</button>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Dashboard;
