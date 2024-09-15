import React, { useContext } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import UnAuthenticatedHeader from "../components/Header/UnAuthenticatedHeader";
import Footer from "../components/Footer/Footer";
import Footer2 from "../../src/components/Footer2/Footer2";
//import Header3 from "../Pages/Header/Header3/Header3";
import UserContext from "../Context/UserContext";
import Header3 from "../Pages/Header/Header3/Header3";

const LayoutCmp = ({ children }) => {
  const location = useLocation(); // Get current path
  const { login } = useContext(UserContext);

  const isloginsignup =
    location.pathname.includes("/login") ||
    location.pathname.includes("/studsignup");
  return (
    <React.Fragment>
      {login ? <Header3 /> : isloginsignup ? null : <UnAuthenticatedHeader />}

      <main>{children}</main>
      {login ? <Footer /> : isloginsignup ? <Footer2 /> : <Footer />}
    </React.Fragment>
  );
};

export default LayoutCmp;
