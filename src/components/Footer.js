import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="mb-24">
        {/* Add bottom margin to ensure space between content and footer */}
        {/* Your content goes here */}
      </div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div className="w-full mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between p-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              PDFxCel
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 space-x-4 md:space-x-6 sm:mt-0">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
