import { Routes, Route } from "react-router-dom";
// import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
import {
  HomePage,
  Dashboard,
  Test,
  Terms,
  Contact,
  Privacy,
  About,
} from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};
