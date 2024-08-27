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
//import Resume2 from "../Pages/Resumees/ResumeCmp/ResumeCmp";
//import Header from "../components/Header/UnAuthenticatedHeader";

import LayoutCmp from "../layoutcmp/LayoutCmp";
//import ResumeCmp from "../Pages/Resumees/ResumeCmp/ResumeCmp";
import Resumejob from "../Pages/Resumees/Resumejob/Resume";
import Job from "../components/Job/Job";
//import Jobtitleatcompany from "../components/Jobtitatcomp/Jobtitleatcompany";
//import Resumejob from "../Pages/Resumees/Resumejob/Resume";
const AuthenticatedRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/job" element={<Job />} />
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
        path="/resumejob"
        element={
          <LayoutCmp>
            <Resumejob />
          </LayoutCmp>
        }
      />
      <Route
        path="/jobtest"
        element={
          <LayoutCmp>
            <Resumejob />
          </LayoutCmp>
        }
      />
      {/* <Route
        path="jobtitleatcompany"
        element={
          <LayoutCmp>
            <Jobtitleatcompany />
          </LayoutCmp>
        }
      /> */}
    </Route>
  )
);

export default AuthenticatedRoutes;
