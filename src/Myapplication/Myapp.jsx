import Styles from "../Css/Myapp/Myapp.css";

function Myapp() {
  return (
    <div>
      <h3>
        {" "}
        My Application <br /> <hr />
      </h3>

      <div className={Styles.headers}>
        <li>Company </li>
        <li>Role</li>
        <li>Applied on </li>
        <li>Number of Applicants</li>
        <li>Application status</li>
      </div>

      <div>
        <li>Company</li>
        <li>Job title </li>
        <li>Today</li>
        <li>12</li>
        <li>
          <button>Applied</button>
        </li>
      </div>
    </div>
  );
}

export default Myapp;
