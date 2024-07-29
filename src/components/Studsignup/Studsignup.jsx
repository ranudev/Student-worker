import { NavLink } from "react-router-dom";
import "../../Css/Studsignup/Studsignup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const Studsignup = () => {
  // const navigate = useNavigate();
  // const gotonext = () => {
  //   navigate("/signuppersondetail");
  // };
  return (
    <div className="outer">
      <h6>Student Worker</h6>
      <p>Student sign up</p>
      <div className="inner-box">
        <div className="google">
          <div className="google-inner">
            <span>
              <FontAwesomeIcon icon={faGoogle} style={{ color: "#ffffff" }} />
            </span>
            sign up with Google
          </div>
        </div>
        <div className="or">
          <div className="orleft"></div>
          or
          <div className="orright"></div>
        </div>
        <form className="frm">
          <label>Email</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="ayodavid123@gmail.com"
          />
          <label>Password</label>
          <input type="password" name="" id="" placeholder="Machine" />

          <p
            style={{
              marginRight: "183px",
              marginTop: "10px",
            }}
          >
            Minimum of 6 characters
          </p>
          <p
            style={{
              marginTop: "10px",
              marginLeft: "-19px",
              fontSize: "18px",
            }}
          >
            By Registering you are agree to our
            <NavLink>Terms and Condtions</NavLink>{" "}
          </p>
          <NavLink to="/signuppersondetail">
            <button>SignuP</button>
          </NavLink>
          <p>
            Already have an account<NavLink to="/login">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Studsignup;
