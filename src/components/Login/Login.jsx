import React from "react";
import style from "../../Css/Login/Login.module.css";
import Footer2 from "../Footer2/Footer2";
import { NavLink } from "react-router-dom";
function Login() {
  return (
    <React.Fragment>
      <div className={style.color}>
        <div className={style.header}>
          <h4>Student worker</h4>
          <p className={style.text}>Login to your account</p>
        </div>
        <div className={style.body}>
          <div className={style.form}>
            <div className={style.stud}>
              {" "}
              <span className={style.stud}>Student </span>
              <span className={style.emp}>Employer</span>
              <hr />
            </div>
            <div className={style.googl}>Login with Google</div>
            <div className={style.or}>
              <span>
                <hr className={style.left} />
              </span>
              <span>or</span>
              <span>
                <hr className={style.right} />
              </span>
            </div>
            <div className={style.label}>
              <label htmlFor="" className={style.lab}>
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="ayodavid@gmail.com"
              />
            </div>
            <div className={style.label}>
              <label htmlFor="" className="lab">
                Password
              </label>
              <input type="password" name="" id="" />
            </div>
            <a href="" className={style.fgtpswd}>
              Forgot password?
            </a>
            <button className={style.log}>Login</button>
            <p className={style.account}>
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
