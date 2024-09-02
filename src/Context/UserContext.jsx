//import React from "react";
import { useState, createContext } from "react";

const UserContext = createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <UserContext.Provider value={{ login, setLogin }}>
      {children}
    </UserContext.Provider>
  );
};
