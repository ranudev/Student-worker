import { useState } from "react";
import "./App.css";

import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

import { RouterProvider } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import EditPersonalModal from "./components/EditpersonalModal/EditPersonalModal";

function App() {
  const [isLoggedin, setIsloggedin] = useState(true);
  return (
    <>
      <RouterProvider
        router={isLoggedin ? AuthenticatedRoutes : UnAuthenticatedRoutes}
      />
      <EditPersonalModal />
    </>
  );
}

export default App;
