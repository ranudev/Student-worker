import { useNavigate, NavLink } from "react-router-dom";
import style from "../../Css/Studsignup/Studsignup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Studsignup = () => {
  const navigate = useNavigate();
  const gotonext = () => {
    navigate("/signuppersondetail");
  };
  return (
    <div className={style.outer}>
      <h6>Student Worker</h6>
      <p>Student sign up</p>
      <div className={style.innerbox}>
        <div className={style.google}>
          <div className={style.googleinner}>
            <span>
              <FontAwesomeIcon icon={faGoogle} style={{ color: "#ffffff" }} />
            </span>
            sign up with Google
          </div>
        </div>
        <div className={style.or}>
          <div className={style.orleft}></div>
          or
          <div className={style.orright}></div>
        </div>
        <form className={style.frm}>
          <label>Email</label>
          <input
            type="email"
            name=""
            id=""
            className={style.Mac}
            placeholder="ayodavid123@gmail.com"
          />
          <label>Password</label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Machine"
            className={style.Mac}
          />
          <div className={style.Char}>
            <p>Minimum of 6 characters</p>
          </div>
          <p className={style.terms}>
            By Registering you are agree to our
            <NavLink>Terms and Condtions</NavLink>{" "}
          </p>

          <button
            onClick={() => {
              gotonext();
            }}
            className={style.sgnup}
          >
            Signup
          </button>

          <p className={style.account}>
            Already have an account<NavLink to="/login">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Studsignup;
