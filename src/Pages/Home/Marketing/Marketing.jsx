import Rect from "../../../assets/Mrect.png";
import Vector from "../../../assets/Vector.png";
import Rect3 from "../../../assets/Rect3.png";

function Marketing() {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(52, 31, 151)",
          height: "200px",
          width: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "150px",
            width: "150px",
            borderRadius: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <div>
              <img src={Rect} style={{ height: "50px" }} alt="" />

              <div style={{ marginBottom: "60%", marginRight: "30%" }}>
                <img src={Rect3} alt="" />
              </div>
              <img src={Vector} alt="" />
            </div>

            <div></div>

            <div></div>

            <div></div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marketing;
