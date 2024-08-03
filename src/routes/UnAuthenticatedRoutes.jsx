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
import Resumejob from "../Pages/Resumees/Resumejob/Resume";
import Signuppersondetail from "../components/Signuppersondetail/Signuppersondetail";
import Layout from "../Layout/layout/Layout";

const UnAuthenticatedRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path index element={<Home />} />
      <Route path="job" element={<Job />} />
      <Route path="employer" element={<Employer />} />
      <Route path="studsignup" element={<Studsignup />} />
      <Route path="login" element={<Login />} />
      <Route path="Jobtitleatcompany" element={<Jobtitleatcompany />} />
      <Route path="resumejob" element={<Resumejob />} />
      <Route path="/signuppersondetail" element={<Signuppersondetail />} />
    </Route>
  )
);

export default UnAuthenticatedRoutes;
