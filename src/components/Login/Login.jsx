import React from "react";
import "../../Css/Login/Login.css";
import Footer2 from "../Footer2/Footer2";
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <React.Fragment>
      <div className="color">
        <div>
          <h4>Student worker</h4>
          <p className="text">Login to your account</p>
        </div>
        <div className="body">
          <div className="form">
            <div className="stud">
              {" "}
              <span className="stud">Student </span>
              <span className="emp">Employer</span>
              <hr />
            </div>
            <div className="google">Login with Google</div>
            <div className="or">
              <span>
                <hr className="left" />
              </span>
              <span>or</span>
              <span>
                <hr className="right" />
              </span>
            </div>
            <div className="label">
              <label htmlFor="" className="lab">
                Email
              </label>
              <input type="email" name="" id="" />
            </div>
            <div className="label">
              <label htmlFor="" className="lab">
                Password
              </label>
              <input type="password" name="" id="" />
            </div>
            <a href="" className="fgtpswd">
              Forgot password?
            </a>
            <button className="log">Login</button>
            <p className="account">
              Dont have an account? <NavLink to="/studsignup">Signup</NavLink>
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </React.Fragment>
  );
}

export default Login;
