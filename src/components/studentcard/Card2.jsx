function Card2(prop) {
  return (
    <>
      <div
        style={{
          height: "160px",
          width: "190px",
          display: "flex",
          alignItems: "center",

          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <img src={prop.img} alt="" />
        <p
          style={{
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "23px",
            marginTop: "21px",
            alignContent: "center",
            textAlign: "center",
            marginRight: "6px",
            color: " rgb(31, 19, 91)",
          }}
        >
          {prop.text}
        </p>
      </div>
    </>
  );
}

export default Card2;
