import React from "react";
import "../../../Css/Header3/Header3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

function Header3() {
  return (
    <React.Fragment>
      <div className="parent">
        <nav className="nav">
          <div>
            <a>
              <h1>StudentWorker</h1>
            </a>
          </div>

          <div className="list">
            <ul>
              <li>Jobs </li>
              <li> My application</li>
              <li>Edit Resume</li>

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

export default Header3;
