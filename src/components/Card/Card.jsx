const Card = (prop) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(52, 31, 151)",
          height: "180px",
          width: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          // width: "198px",
          // height: "171px",

          left: "182px",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <div
          style={{
            width: "198px",
            height: "171px",
            top: "944px",
            left: "450px",
            gap: "0px",
            borderRadius: "10px",
            opacity: " 0px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",

              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "50px",
              marginTop: "20px",
              width: "100px",
              height: "100px",
              top: "800px",
              left: "509px",
              gap: " 0px",
              opacity: "0px",
            }}
          >
            <img src={prop.img} />
          </div>
          <p
            style={{
              color: "white",
              marginLeft: "50px",
              position: "absolute",
              fontSize: "25px",
              marginTop: "10px",
            }}
          >
            {prop.text}
          </p>
        </div>
      </div>
    </>
  );
};
export default Card;
