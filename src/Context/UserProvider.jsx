//import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <UserContext.Provider value={{ login, setLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
