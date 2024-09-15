//import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Signupeducation from "../components/Signupeducation/Signupeducation";
import Signuppersondetail from "../components/Signuppersondetail/Signuppersondetail";

import Resumejob from "../Pages/Resumees/Resumejob/ResumeJob";
import LayoutCmp from "../layoutcmp/LayoutCmp";

import Job from "../components/Job/Job";

const AuthenticatedRoutes = () =>
  createBrowserRouter(
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
          path="/resumejob"
          element={
            <LayoutCmp>
              <Resumejob />
            </LayoutCmp>
          }
        />
      </Route>
    )
  );

export default AuthenticatedRoutes;
