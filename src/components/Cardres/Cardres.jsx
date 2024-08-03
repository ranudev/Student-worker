import React from "react";
import style from "../../Css/Cardres/Cardres.module.css";

function Cardres(prop) {
  return (
    <React.Fragment>
      <div className={style.box}>
        <div className={style.upperprt}>
          <h3> {prop.text1}</h3>
          <p>{prop.text2}</p>
        </div>

        <hr />
        <div className={style.lower}>
          <p>{prop.text3}</p>
          <p>{prop.text4}</p>

          <p>{prop.text5}</p>
          <p>{prop.text6}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cardres;
