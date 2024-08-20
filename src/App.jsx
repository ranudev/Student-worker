import { useState } from "react";
import "./App.css";
//import Skill from "./components/Skillmodal/Skill";
//import Education from "./components/Education/Education";

//import Footer from "./components/Footer/Footer";

import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";
//import Persondetail from "../src/components/Persondet/Persondetail3";
import { RouterProvider } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
//import Jobtitle from "./components/Jobtitle/Jobtitle";
//import CreatePost from "./components/createPost/CreatePost";
//import SubmitCard from "./components/submitCard/SubmitCard";
//import Resumejob from "./Pages/Resumees/Resumejob/Resumejob";
function App() {
  const [isLoggedin, setIsloggedin] = useState(false);
  return (
    <>
      <RouterProvider
        router={isLoggedin ? AuthenticatedRoutes : UnAuthenticatedRoutes}
      />

      {/* <Persondetail /> */}
      {/* <Education /> */}
      {/* <Skill /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
