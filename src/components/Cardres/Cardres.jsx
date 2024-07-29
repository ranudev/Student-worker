import React from "react";
import "../../Css/Cardres/Cardres.css";

function Cardres(prop) {
  return (
    <React.Fragment>
      <div className="box">
        <div className="upperprt">
          <h3> {prop.text1}</h3>
          <p>{prop.text2}</p>
        </div>

        <hr
          style={{
            width: "98%",
            border: "0.3px solid rgba(0, 0, 0, 0.4)",
          }}
        />
        <div className="lower">
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
