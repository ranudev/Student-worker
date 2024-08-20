//import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Signupeducation from "../components/Signupeducation/Signupeducation";
import Signuppersondetail from "../components/Signuppersondetail/Signuppersondetail";
import Skill from "../components/Skillmodal/Skill";
//import Studsignup from "../components/Studsignup/Studsignup";
import Resume2 from "../Pages/Resumees/Resume2/Resume2";
//import Header from "../components/Header/UnAuthenticatedHeader";

import LayoutCmp from "../layoutcmp/LayoutCmp";
const AuthenticatedRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/signuppersondetail"
        element={
          <LayoutCmp>
            {" "}
            <Signuppersondetail />
          </LayoutCmp>
        }
      />
      <Route
        path="/signupeducation"
        element={
          <LayoutCmp>
            <Signupeducation />
          </LayoutCmp>
        }
      />
      <Route
        path="/skill"
        element={
          <LayoutCmp>
            {" "}
            <Skill />
          </LayoutCmp>
        }
      />
      <Route
        path="/resume2"
        element={
          <LayoutCmp>
            {" "}
            <Resume2 />
          </LayoutCmp>
        }
      />
    </Route>
  )
);

export default AuthenticatedRoutes;
