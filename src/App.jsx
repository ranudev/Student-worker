//import { useState } from "react";
import "./App.css";
//import CreatePost from "./components/createPost/CreatePost";
import Orgdet from "./components/ORGdet/Orgdet";
//import Resume from "../src/Pages/Resumees/Resume/Resume";
//import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

//import { RouterProvider } from "react-router-dom";
//import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";

//import EditPersonalModal from "./components/EditpersonalModal/EditPersonalModal";

function App() {
  //const [isLoggedin, setIsloggedin] = useState(true);
  return (
    <>
      {/* <RouterProvider
        router={isLoggedin ? AuthenticatedRoutes : UnAuthenticatedRoutes}
      />
       <EditPersonalModal />  */}
      <Orgdet />
    </>
  );
}

export default App;
