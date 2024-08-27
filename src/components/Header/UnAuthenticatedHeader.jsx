import style from "../../Css/Header/Header.module.css";
import { NavLink, Outlet } from "react-router-dom";

export default function UnAuthenticatedHeader() {
  return (
    <div>
      <nav className={style.nav} id={style.navigation}>
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
                className={({ isActive }) => (isActive ? style.active : "")}
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
                className={({ isActive }) => (isActive ? style.active : "")}
                style={{
                  textDecoration: "none",
                }}
              >
                Job
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? style.active : "")}
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

            <button className={style.loginbtn}>
              {" "}
              <NavLink to="/login" className={style.login}>
                Login{" "}
              </NavLink>{" "}
            </button>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
