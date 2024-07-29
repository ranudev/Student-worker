import "../../Css/Header/Header.css";
import { NavLink, Outlet } from "react-router-dom";

export default function UnAuthenticatedHeader() {
  return (
    <div>
      <nav className="nav">
        <div>
          <a>
            <h1>Student worker</h1>
          </a>
        </div>

        <div className="list">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/job">Job</NavLink>
            </li>
            <li>
              <NavLink to="/employer">Employer</NavLink>
            </li>
          </ul>
        </div>
        <div className="list">
          <ul>
            <li>About Us </li>
            <li>Contact Us</li>
            <NavLink to="/login">
              <button className="loginbtn">Login</button>
            </NavLink>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
