import React from "react";
import UnAuthenticatedHeader from "../components/Header/UnAuthenticatedHeader";

import Footer from "../components/Footer/Footer";
const LayoutCmp = ({ children }) => {
  return (
    <React.Fragment>
      <UnAuthenticatedHeader />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default LayoutCmp;
