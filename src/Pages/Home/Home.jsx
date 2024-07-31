import Rect from "../../assets/Rect.png";

import style from "../../Css/Home/Home.module.css";
import buffet from "../../assets/buffet.png";
import bull from "../../assets/bull.png";
import Career from "../../assets/Career.png";
import Retail from "../../assets/Reatail.png";

import Card from "../../components/Card/Card";
import Search from "../../assets/Search.png";
import Card2 from "../../components/studentcard/Card2";

import fess from "../../assets/fess.png";
import network from "../../assets/profnetwork.png";
import work from "../../assets/work.png";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider
        img={Rect}
        text1="Earn While you  school  "
        text2="Find part-time jobs close to you and  earn"
        text3=" as a student "
      />

      <h4 className={style.next}>Find your next Job</h4>
      <div>
        <p className={style.keywrd}>Title/Keyword/Category</p>
        <div className={style.inp}>
          <input type="text" placeholder="ui/ux Design" />

          <div className={style.srchicon}>
            <img src={Search} alt="" />
          </div>
        </div>
      </div>
      <p className={style.categtxt}>Explore our Categories</p>
      <div className={style.card}>
        {/* CARD */}
        <Card text="Retail" img={Retail} />
        <Card text="Catering " img={buffet} />
        <Card text="Marketing " img={bull} />
        <Card text="Career" img={Career} />
      </div>

      <p className={style.studentwrkr}>500+ Students Love StudentWorker</p>
      <div className={style.card2}>
        {/* card2  */}
        <Card2 img={fess} text="Pay College Fees" />
        <Card2 img={network} text="Gain valuable work experience" />
        <Card2 img={work} text="Build a professional network" />
      </div>

      <button className={style.signup}> Student Signup</button>
    </div>
  );
};

export default Home;
