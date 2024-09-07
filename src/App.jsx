//import { useState } from "react";
import "./App.css";

import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

import { RouterProvider } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";

import { useContext } from "react";
import UserContext, { UserProvider } from "./Context/UserContext";

function App() {
  const { login } = useContext(UserContext);

  console.log("login status:", login);
  console.log(
    "Router:",
    login ? "AuthenticatedRoutes" : "UnAuthenticatedRoutes"
  );

  return (
    <>
      <RouterProvider
        key={login}
        router={login ? AuthenticatedRoutes() : UnAuthenticatedRoutes}
      />
    </>
  );
}

export default App;
