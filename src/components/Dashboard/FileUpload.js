import React, { useState } from "react";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [prompts, setPrompts] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handlePromptsChange = (e) => {
    setPrompts(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData
    const formData = new FormData();
    for (const file of files) {
      formData.append("files", file);
    }
    formData.append("prompts", prompts); // Add prompts as plain text

    try {
      const response = await fetch(
        "https://pdfxcel-api.onrender.com/api/upload-file",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "PDFxCel_Result.xlsx");
        document.body.appendChild(link);
        link.click();
        setUploadMessage("Files processed successfully!");
      } else {
        const error = await response.json();
        setUploadMessage(`Error: ${error.error}`);
      }
    } catch (error) {
      setUploadMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Upload PDF Files</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
        <input
          type="text"
          value={prompts}
          onChange={handlePromptsChange}
          placeholder="Enter prompts for summarization"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Upload and Process
        </button>
        <p className="mt-2">{uploadMessage}</p>
      </form>
    </div>
  );
};

export default FileUpload;
