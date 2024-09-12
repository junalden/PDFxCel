import { Routes, Route } from "react-router-dom";
// import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";
import {
  HomePage,
  Dashboard,
  Test,
  Terms,
  Contact,
  Privacy,
  News,
  About,
  Article,
} from "../pages";
import { Main } from "../components/Dashboard/Main";
import { Templates } from "../components/Dashboard/Templates";
import { PDFAnalyzer } from "../components/Dashboard/PDFAnalyzer";
import { AccountSettings } from "../components/Dashboard/AccountSettings";
import FileUpload from "../components/Dashboard/FileUpload";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="main" element={<Main />} />
          <Route path="templates" element={<Templates />} />
          <Route path="fileupload" element={<FileUpload />} />
          <Route path="accountsettings" element={<AccountSettings />} />
        </Route>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </>
  );
};
