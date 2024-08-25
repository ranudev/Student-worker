import { NavLink } from "react-router-dom";
import style from "../../Css/Studsignup/Studsignup.module.css";
import { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Studsignup = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  const signupHandle = () => {
    if (email != "") {
      setMsg("Valid email");
    } else {
      setErr("Enter valid email");
    }
  };
  const emailHandler = (e) => {
    let pattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    let item = e.target.value;
    setEmail(item);

    if (!pattern.test(email)) {
      setErr("Please enter valid email");
    } else {
      setErr("");
      return true;
    }
  };
  const psswrdHandler = () => {};
  return (
    <div className={style.color}>
      <div className={style.header}>
        <div>
          <h4>Student worker</h4>
        </div>
        <div>
          <p className={style.text}>Student signup</p>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.form}>
          <div className={style.studemp}>
            <span className={style.stud}>Student </span>
            <span className={style.emp}>Employer</span>
            <hr />
          </div>
          <div className={style.googl}>Signup with Google</div>
          <div className={style.or}>
            <span>
              <hr className={style.left} />
            </span>
            <span>or</span>
            <span>
              <hr className={style.right} />
            </span>
          </div>
          <form>
            <div className={style.label}>
              <label htmlFor="" className={style.lab}>
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="ayodavid@gmail.com"
                onChange={emailHandler}
                value={email}
              />
            </div>
            <p style={{ color: "red", fontSize: "20px" }}>{err}</p>
            <p>{msg}</p>
            <div className={style.lavel}>
              <label htmlFor="" className={style.lab}>
                Password
              </label>
              <input
                type="password"
                name=""
                placeholder="Machine"
                onChange={psswrdHandler}
              />
            </div>

            <p className={style.char}>Minimum 6 Character</p>

            <p className={style.terms}>
              By Registering you are agree to our
              <NavLink>Terms and Condtions</NavLink>{" "}
            </p>
            <button className={style.log} onClick={signupHandle}>
              <NavLink to="/signuppersondetail">Signup</NavLink>
            </button>
            <p className={style.account}>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Studsignup;
