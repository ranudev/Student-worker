import { useState, useEffect } from "react";
import "./App.css";

import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

import { RouterProvider } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";

//import EditPersonalModal from "./components/EditpersonalModal/EditPersonalModal";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <>
      <RouterProvider
        router={isLoggedin ? AuthenticatedRoutes : UnAuthenticatedRoutes}
      />
    </>
  );
}

export default App;
