import React from "react";
import style from "../../../Css/Header2/Header2.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
//import UnAuthenticatedHeader from "./UnAuthenticatedHeader";

function AuthenticatedHeader() {
  return (
    <React.Fragment>
      <div className={style.parent}>
        <nav className={style.nav}>
          <div>
            <a>
              <h1>Student Worker</h1>
            </a>
          </div>

          <div className={style.list}>
            <ul>
              <li>Dashboards</li>
              <li> Post Jobs</li>

              <li>
                <FontAwesomeIcon icon={faComment} rotation={270} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default AuthenticatedHeader;

//
