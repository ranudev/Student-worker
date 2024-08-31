import { NavLink } from "react-router-dom";
import style from "../../Css/Studsignup/Studsignup.module.css";
import { useState } from "react";

const Studsignup = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.email !== "") {
      const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(input.email)) {
        //test method is used to check pattern of mail[its a built-in method]
        setErr("Please enter a valid email");
        return;
      }

      setMsg("Valid email");
      setErr("");
      localStorage.setItem("user", JSON.stringify(input));
    } else {
      setErr("Enter a valid email");
    }
  };

  const emailHandler = (event) => {
    const value = event.target.value;
    setInput({ ...input, email: value });

    const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
      setErr("Please enter a valid email");
    } else {
      setErr("");
    }
  };

  const psswrdHandler = (event) => {
    const value = event.target.value;
    setInput({ ...input, password: value });
  };

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
            <hr className={style.line1} />
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
          <form onSubmit={handleSubmit}>
            <div className={style.label}>
              <label htmlFor="email" className={style.lab}>
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="ayodavid@gmail.com"
                onChange={emailHandler}
                value={input.email}
              />
            </div>
            {err && (
              <p style={{ color: "red", fontSize: "20px", marginTop: "10px" }}>
                {err}
              </p>
            )}
            {msg && (
              <p
                style={{ color: "green", fontSize: "20px", marginTop: "10px" }}
              >
                {msg}
              </p>
            )}

            <div className={style.lavel}>
              <label htmlFor="password" className={style.lab}>
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Machine"
                onChange={psswrdHandler}
                className={style.signupinp}
                value={input.password}
              />
            </div>

            <p className={style.char}>Minimum 6 Character</p>

            <p className={style.terms}>
              By Registering you agree to our{" "}
              <NavLink to="/terms">Terms and Conditions</NavLink>{" "}
            </p>
            <div className={style.signupbtn}>
              <button className={style.log} type="submit">
                Sign Up
              </button>
            </div>
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
