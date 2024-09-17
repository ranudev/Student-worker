import React, { useContext, useState } from "react";
import style from "../../Css/Login/Login.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");

  const { setLogin } = useContext(UserContext);

  const emailHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const pswrdHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    {
      e.preventDefault();

      /********************fetch method ****************************/

      fetch(" http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify({
          username: input.email,
          password: input.password,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((error) => {
              throw new Error(error.message || "Something went wrong");
            });
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            localStorage.setItem("user", JSON.stringify(input));

            setLogin(true);
            navigate("/signuppersondetail");
          }
        })
        .catch((err) => {
          console.error("Error:", err.message);
          setErr(`Error: ${err.message}`);
        });
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className={style.label}>
                <label htmlFor="email" className={style.lab}>
                  Email
                </label>
                <input
                  value={input.email}
                  onChange={emailHandler}
                  type="email"
                  name="email"
                  placeholder="ayodavid@gmail.com"
                  className={style.signupinp}
                />
              </div>
              <div className={style.label}>
                <label htmlFor="password" className={style.lab}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={pswrdHandler}
                  className={style.signupinp}
                />
              </div>
              <div className={style.signupbtn}>
                <button className={style.log} type="submit">
                  Login
                </button>
              </div>
            </form>

            {err && (
              <p
                style={{
                  color: "red",
                  fontSize: "20px",
                  marginTop: "10px",
                  marginLeft: "20px",
                  fontWeight: "300",
                }}
              >
                {err}
              </p>
            )}
            <Link to="#" className={style.fgtpswd}>
              Forgot password?
            </Link>
            <p className={style.account}>
              Dont have an account? <NavLink to="/studsignup">Signup</NavLink>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
