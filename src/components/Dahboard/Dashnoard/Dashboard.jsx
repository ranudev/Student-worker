import React from "react";
import Header2 from "../../../Pages/Header/Header2/Header2";
import "../../../Css/Dashboard/Dashboard.css";
import Footer from "../../../components/Footer/Footer";

function Dashboard() {
  return (
    <React.Fragment>
      <Header2 />
      <hr />
      <div className="header">
        <h3> Dashboard</h3>
      </div>
      <div className="title">
        <p>
          job Title: <span>Posted</span>
        </p>
      </div>
      <div className="sec">
        <p>Applicant</p>
        <p>Role</p>
        <p>Applied</p>
        <p>Resume</p>
      </div>
      <div className="third">
        <p>Ayo David</p>
        <p>Job Title</p>
        <p>Today</p>
        <p>View</p>
      </div>
      <hr
        style={{
          marginLeft: "232px",
          marginRight: "187px",
        }}
      />
      <div className="btn">
        <button>Review Job Post</button>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Dashboard;
