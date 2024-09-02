//import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
//import Header from "../components/Header/UnAuthenticatedHeader";
import Home from "../Pages/Home/Home";
import Job from "../components/Job/Job";
import Employer from "../Pages/Employer/Employer";
import Studsignup from "../components/Studsignup/Studsignup";
import Login from "../components/Login/Login";
import Jobtitleatcompany from "../components/Jobtitatcomp/Jobtitleatcompany";
// import Resumejob from "../Pages/Resumees/Resumejob/Resume";
import LayoutCmp from "../layoutcmp/LayoutCmp";

const UnAuthenticatedRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <LayoutCmp>
            <Home />
          </LayoutCmp>
        }
      />
      <Route
        path="job"
        element={
          <LayoutCmp>
            <Job />
          </LayoutCmp>
        }
      />
      <Route
        path="employer"
        element={
          <LayoutCmp>
            <Employer />
          </LayoutCmp>
        }
      />
      <Route
        path="studsignup"
        element={
          <LayoutCmp>
            <Studsignup />
          </LayoutCmp>
        }
      />
      <Route
        path="login"
        element={
          <LayoutCmp>
            <Login />
          </LayoutCmp>
        }
      />
      <Route
        path="Jobtitleatcompany"
        element={
          <LayoutCmp>
            <Jobtitleatcompany />
          </LayoutCmp>
        }
      />
    </Route>
  )
);

export default UnAuthenticatedRoutes;
