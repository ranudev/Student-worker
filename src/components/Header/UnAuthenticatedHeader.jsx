import style from "../../Css/Header/Header.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function UnAuthenticatedHeader() {
  return (
    <div>
      <nav className={style.nav}>
        <div>
          <a>
            <h1>Student worker</h1>
          </a>
        </div>

        <div className={style.list}>
          <ul>
            <li>
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/job"
                style={{
                  textDecoration: "none",
                }}
              >
                Job
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/employer"
                style={{
                  textDecoration: "none",
                }}
              >
                Employer
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.list}>
          <ul>
            <li>About Us </li>
            <li>Contact Us</li>
            <NavLink to="/login">
              <button className={style.loginbtn}>Login</button>
            </NavLink>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
