import React, { useState } from "react";

export const AccountSettings = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChangeEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://pdfxcel-api.onrender.com/api/change-email",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newEmail }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setEmail(newEmail);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to update email");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://pdfxcel-api.onrender.com/api/change-password",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ oldPassword, newPassword }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setOldPassword("");
        setNewPassword("");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to update password");
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>

      <form onSubmit={handleChangeEmail} className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Change Email</h2>
        <label className="block mb-2">
          New Email:
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Change Email
        </button>
      </form>

      <form onSubmit={handleChangePassword}>
        <h2 className="text-xl font-semibold mb-2">Change Password</h2>
        <label className="block mb-2">
          Old Password:
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </label>
        <label className="block mb-2">
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Change Password
        </button>
      </form>

      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};
