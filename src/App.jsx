//import { useState } from "react";
import "./App.css";

import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

import { RouterProvider } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";

import { useContext } from "react";
import UserContext, { UserProvider } from "./Context/UserContext";

function App() {
  const { login } = useContext(UserContext);
  return (
    <>
      <UserProvider>
        <RouterProvider
          router={login ? AuthenticatedRoutes : UnAuthenticatedRoutes}
        />
      </UserProvider>
    </>
  );
}

export default App;
