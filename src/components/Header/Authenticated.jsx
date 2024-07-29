import React from "react";
import "../../../Css/Header2/Header2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

function Header2() {
  return (
    <React.Fragment>
      <div className="parent">
        <nav className="nav">
          <div>
            <a>
              <h1>Student Worker</h1>
            </a>
          </div>

          <div className="list">
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

export default Header2;

//
