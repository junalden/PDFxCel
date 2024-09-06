import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import CreateAccountModal from "./CreateAccountModal";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] =
    useState(false);
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false); // Track login success
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://pdfxcel-api.onrender.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("jwtToken", data.token); // Save the token
        // console.log("Token Set:", localStorage.getItem("jwtToken")); // Verify token storage
        navigate("/dashboard");
        onClose(); // Close modal or redirect as needed
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An unexpected error occurred.");
    }
  };

  const openCreateAccountModal = () => setIsCreateAccountModalOpen(true);
  const closeCreateAccountModal = () => setIsCreateAccountModalOpen(false);

  return (
    <div
      id="login-modal"
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto ${
        isOpen ? "" : "hidden"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          className="absolute top-2 right-2 text-gray-400 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg p-2"
          onClick={onClose}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="p-4 md:p-5">
          <form className="space-y-4" onSubmit={handleLoginSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="name@flowbite.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Login
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={openCreateAccountModal}
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Create Account
              </button>
            </p>
          </form>
        </div>
      </div>
      <CreateAccountModal
        isOpen={isCreateAccountModalOpen}
        onClose={closeCreateAccountModal}
      />
    </div>
  );
};

export default LoginModal;
