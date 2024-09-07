import { NavLink, useNavigate } from "react-router-dom";
import style from "../../Css/Studsignup/Studsignup.module.css";
import { useContext, useState } from "react";
import { emailPattern } from "../../Utilities/Utils";
import UserContext from "../../Context/UserContext";

const Studsignup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { setLogin } = useContext(UserContext);
  const [emailerr, setemailErr] = useState("");
  const [passworderr, setPasswordErr] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setemailErr("");
    setPasswordErr("");

    if (input.email !== "" && input.password != "") {
      if (!emailPattern.test(input.email)) {
        //test method is used to check pattern of mail[its a built-in method]
        setemailErr("Please enter a valid email");

        return;
      }
      if (input.password.length <= 5) {
        setPasswordErr("Please enter minimum 5 character password");
        return;
      }

      localStorage.setItem("user", JSON.stringify(input));

      setMsg("Form submitted succesfully");
      setLogin(true);
      navigate("/signuppersondetail");
    } else {
      if (input.email === "") setemailErr("Email is required");
      if (input.password === "") setPasswordErr("Password is required");
    }
  };

  const emailHandler = (event) => {
    const value = event.target.value;
    setInput({ ...input, email: value });

    if (!emailPattern.test(value)) {
      setemailErr("Please enter a valid email");
    } else {
      setemailErr("");
      setPasswordErr("");
    }
  };

  const passwordHandler = (event) => {
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
                className={style.signupinp}
                value={input.email}
              />
            </div>
            {emailerr && (
              <p style={{ color: "red", fontSize: "20px", marginTop: "10px" }}>
                {emailerr}
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
                onChange={passwordHandler}
                className={style.signupinp}
                value={input.password}
              />
            </div>
            {passworderr && (
              <p style={{ color: "red", fontSize: "20px", marginTop: "10px" }}>
                {passworderr}
              </p>
            )}

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
            {msg && (
              <P
                style={{ fontSize: "10px ", color: "green", marginTop: "10px" }}
              >
                {" "}
                {msg}
              </P>
            )}
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
