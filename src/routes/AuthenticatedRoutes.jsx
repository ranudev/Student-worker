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
import Header from "../components/Header/UnAuthenticatedHeader";

const AuthenticatedRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="/signuppersondetail" element={<Signuppersondetail />} />
      <Route path="/signupeducation" element={<Signupeducation />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/resume2" element={<Resume2 />} />
    </Route>
  )
);

export default AuthenticatedRoutes;
