import style from "../../Css/card/Card2.module.css";

function Card2(prop) {
  return (
    <>
      <div className={style.imgbx}>
        <img src={prop.img} alt="" />
        <p className={style.txt}>{prop.text}</p>
      </div>
    </>
  );
}

export default Card2;
