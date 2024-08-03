import React from "react";
import style from "../../../Css/Header3/Header3.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

function Header3() {
  return (
    <React.Fragment>
      <div className={style.parent}>
        <nav className={style.nav}>
          <div>
            <a>
              <h1>StudentWorker</h1>
            </a>
          </div>

          <div className={style.list}>
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
