import style from "../../Css/card/Card.module.css";

const Card = (prop) => {
  return (
    <>
      <div className={style.outerbox}>
        <div className={style.innerbox}>
          <div className={style.imgbox}>
            <img src={prop.img} />
          </div>
          <p className={style.text}>{prop.text}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
