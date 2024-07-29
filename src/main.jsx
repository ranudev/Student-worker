import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./Pages/Home/Home.jsx";
// import Job from "./components/Job/Job.jsx";
// import Employer from "./Pages/Employer/Employer.jsx";
// import Jobtitleatcompany from "./components/Jobtitatcomp/Jobtitleatcompany.jsx";
// import Studsignup from "./components/Studsignup/Studsignup.jsx";
// import Signuppersondetail from "./components/Signuppersondetail/Signuppersondetail.jsx";
// import Signupeducation from "./components/Signupeducation/Signupeducation.jsx";
// import Skill from "./components/Skillmodal/Skill.jsx";
// import Resume2 from "./Pages/Resumees/Resume2/Resume2.jsx";
//import Resumejob from "./Pages/Resumees/Resumejob/Resumejob.jsx";
//import Login from "./components/Login/Login.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index element={<Home />} />
//       <Route path="/studsignup" element={<Studsignup />} />
//       <Route path="/signuppersondetail" element={<Signuppersondetail />} />
//       <Route path="/signupeducation" element={<Signupeducation />} />
//       <Route path="/skill" element={<Skill />} />
//       <Route path="/resume2" element={<Resume2 />} />

//       {/* <Route path=" /jobs" element={<Job />} /> */}
//       <Route path="job" element={<Job />} />
//       <Route path="employer" element={<Employer />} />
//       <Route path="jobtitleatcompany" element={<Jobtitleatcompany />} />
//     </Route>
//   )
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
