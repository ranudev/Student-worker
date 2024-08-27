import React from "react";
import style from "../../Css/Login/Login.module.css";
//import Footer2 from "../Footer2/Footer2";
import { Link, NavLink } from "react-router-dom";
function Login() {
  return (
    <React.Fragment>
      <div className={style.color}>
        <div className={style.header}>
          <div>
            <h4>Student worker</h4>
          </div>
          <div>
            <p className={style.text}>Login to your account</p>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.form}>
            <div className={style.studemp}>
              <span className={style.stud}>Student </span>
              <span className={style.emp}>Employer</span>
              <hr className={style.line1} />
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
                className={style.signupinp}
              />
            </div>
            <div className={style.label}>
              <label htmlFor="" className={style.lab}>
                Password
              </label>
              <input
                type="password"
                name=""
                id=""
                className={style.signupinp}
              />
            </div>
            <Link href="" className={style.fgtpswd}>
              Forgot password?
            </Link>
            {/* <button className={style.log}>Login</button> */}
            <div className={style.signupbtn}>
              <button className={style.log}>Login</button>
            </div>
            <p className={style.account}>
              Dont have an account? <NavLink to="/studsignup">Signup</NavLink>
            </p>
          </div>
        </div>
      </div>
      {/* <Footer2 /> */}
    </React.Fragment>
  );
}

export default Login;
