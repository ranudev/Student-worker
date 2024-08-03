import { NavLink } from "react-router-dom";
import style from "../../Css/Studsignup/Studsignup.module.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Studsignup = () => {
  // const navigate = useNavigate();
  // const gotonext = () => {
  //   navigate("/signuppersondetail");
  // };
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
          <div className={style.lavel}>
            <label htmlFor="" className={style.lab}>
              Password
            </label>
            <input type="password" name="" id="" />
          </div>

          <p className={style.char}>Minimum 6 Character</p>

          <p className={style.terms}>
            By Registering you are agree to our
            <NavLink>Terms and Condtions</NavLink>{" "}
          </p>
          <button className={style.log}>Signup</button>
          <p className={style.account}>
            Already have an account? <NavLink>Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Studsignup;
