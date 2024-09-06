import React, { useState } from "react";

export const ProcessButton = ({ file, prompts }) => {
  const [responseMessage, setResponseMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleProcessClick = async () => {
    if (!file) {
      setResponseMessage("No file selected");
      return;
    }

    // Clear previous response message
    setResponseMessage("");

    console.log("File:", file); // Log the file object
    console.log("Prompts:", prompts); // Log the prompts array

    const formData = new FormData();
    formData.append("file", file);
    formData.append("prompts", JSON.stringify(prompts)); // Include prompts in the form data

    setUploading(true);
    try {
      const response = await fetch(
        "https://pdfxcel-api.onrender.com/process-pdf",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Create a Blob from the response
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement("a");
      link.href = url;
      link.download = "gemini_response.xlsx"; // The filename for the downloaded file
      document.body.appendChild(link);
      link.click();

      // Clean ups
      link.remove();
      window.URL.revokeObjectURL(url);
      setResponseMessage("File processed and downloaded successfully.");
      console.log("File processed and downloaded successfully.");
    } catch (error) {
      setResponseMessage(`Error during file upload: ${error.message}`);
      console.error("Error during file upload:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <button
        onClick={handleProcessClick}
        className="px-6 py-3 bg-blue-500 text-white rounded text-lg"
        disabled={uploading}
      >
        {uploading ? "Processing..." : "Process and Download"}
      </button>
      {responseMessage && (
        <p className="text-center mt-4 text-gray-700">{responseMessage}</p>
      )}
    </div>
  );
};
