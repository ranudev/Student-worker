import Rect from "../../assets/Rect.png";

import "../../Css/Home/Home.css";
import buffet from "../../assets/buffet.png";
import bull from "../../assets/bull.png";
import Career from "../../assets/Career.png";
import Retail from "../../assets/Reatail.png";

import Card from "../../components/Card/Card";
import Search from "../../assets/Search.png";
import Card2 from "../../components/studentcard/Card2";
//import Signup from "../../assets/Signup.png";
//import Footer from "../../components/Footer/Footer";
import fess from "../../assets/fess.png";
import network from "../../assets/profnetwork.png";
import work from "../../assets/work.png";
import Slider from "../../components/Slider/Slider";

//import Header from "../../components/Header/Header";

const Home = () => {
  // const navigate = useNavigate();
  return (
    <div>
      {/* <Header /> */}
      <Slider
        img={Rect}
        text1="Earn While you  school  "
        text2="Find part-time jobs close to you and  earn"
        text3=" as a student "
      />

      <h4
        style={{
          textAlign: "center",
          marginTop: "66px",
        }}
      >
        Find your Next Job
      </h4>
      <div>
        <p
          style={{
            marginLeft: "33%",
            fontSize: "18px",
            color: "rgb(31, 19, 91)",
            marginTop: "22px",
          }}
        >
          Title/Keyword/Text
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="ui/ux Design"
            style={{ textAlign: "left", width: "514.47px", height: "41px" }}
          />
          {/* Searh icon */}
          <div
            style={{
              backgroundColor: "rgb(10, 103, 79) ",
              height: "41px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "200",
            }}
          >
            <img src={Search} alt="" />
          </div>
        </div>
      </div>
      <p
        style={{
          marginLeft: "160px",
          marginTop: "30px",
          // fontFamily: "Roboto",
          fontSize: "2em",
          color: " rgb(31, 19, 91)",
        }}
      >
        Explore our Categories
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        {/* CARD */}
        <Card text="Retail" img={Retail} />
        <Card text="Catering " img={buffet} />
        <Card text="Marketing " img={bull} />
        <Card text="Career" img={Career} />
      </div>

      <p
        style={{
          fontFamily: "Roboto",
          fontSize: "1.9em",
          marginTop: "90px",
          textAlign: "center",
          marginLeft: "29%",
          color: " rgb(31, 19, 91)",
        }}
      >
        500+ Students Love StudentWorker
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",

          marginTop: "80px",
        }}
      >
        {/* card2  */}
        <Card2 img={fess} text="Pay College Fees" />
        <Card2 img={network} text="Gain valuable work experience" />
        <Card2 img={work} text="Build a professional network" />
      </div>

      <button className="signup">Signup</button>

      {/* <Footer /> */}
      {/* <Marketing /> */}
    </div>
  );
};

export default Home;
