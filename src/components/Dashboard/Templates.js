import React, { useState, useEffect } from "react";

export const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [templateToDelete, setTemplateToDelete] = useState(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch(
          "https://pdfxcel-api.onrender.com/api/templates",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error(
            `Error fetching templates: ${response.status} ${response.statusText}`
          );
          console.error("Response body:", errorText);
          return;
        }

        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setTemplates(data);
        } else {
          const text = await response.text();
          console.error("Unexpected response format:", text);
        }
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  }, []);

  // Function to handle the delete action once confirmed
  const confirmDelete = async () => {
    try {
      await fetch(
        `https://pdfxcel-api.onrender.com/api/templates/${templateToDelete}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
        }
      );

      const updatedTemplates = templates.filter(
        (template) => template.matrix_id !== templateToDelete
      );
      setTemplates(updatedTemplates);
      setTemplateToDelete(null); // Reset after deletion
      hideModal(); // Close modal
    } catch (error) {
      console.error("Error deleting template:", error);
    }
  };

  // Function to show the modal
  const showModal = (id) => {
    setTemplateToDelete(id);
    document.getElementById("popup-modal").classList.remove("hidden");
  };

  // Function to hide the modal
  const hideModal = () => {
    document.getElementById("popup-modal").classList.add("hidden");
  };

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 ps-10">Template List</h1>
        <ul className="bg-white shadow-md rounded-lg p-4">
          {templates.length > 0 ? (
            templates.map((template) => (
              <li
                key={template.matrix_id}
                className="flex flex-col justify-between items-start py-4 border-b last:border-b-0"
              >
                <div className="w-full flex justify-between items-center">
                  <span className="font-semibold">
                    Template {template.matrix_id}
                  </span>
                  <button
                    onClick={() => showModal(template.matrix_id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
                <textarea
                  className="w-full mt-2 p-2 bg-gray-200 text-gray-500 rounded"
                  rows="2"
                  placeholder="Template Description. Feature coming soon."
                  disabled
                />
              </li>
            ))
          ) : (
            <p>No templates available.</p>
          )}
        </ul>
      </div>

      {/* Modal */}
      <div
        id="popup-modal"
        tabIndex="-1"
        className="hidden fixed inset-0 z-50 flex items-center justify-center w-full h-screen"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={hideModal}
            >
              <svg
                className="w-3 h-3"
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
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this template?
              </h3>
              <button
                onClick={confirmDelete}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={hideModal}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
