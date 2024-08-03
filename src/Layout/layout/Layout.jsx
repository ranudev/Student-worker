import React from "react";
import UnAuthenticatedHeader from "../../components/Header/UnAuthenticatedHeader";
import Footer from "../../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <UnAuthenticatedHeader />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
