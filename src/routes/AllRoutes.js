import { Routes, Route } from "react-router-dom";
// import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
import { HomePage, Dashboard, Test } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </>
  );
};
