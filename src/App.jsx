//import { useState } from "react";
import "./App.css";

import UnAuthenticatedRoutes from "./routes/UnAuthenticatedRoutes";

import { RouterProvider } from "react-router-dom";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";

import UserProvider from "../../Context/userProvider";

function App() {
  return (
    <>
      <UserProvider value={{ login }}>
        <RouterProvider
          router={login ? AuthenticatedRoutes : UnAuthenticatedRoutes}
        />
      </UserProvider>
    </>
  );
}

export default App;
