import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// https://www.geeksforgeeks.org/jqwidgets-jqxgrid-rendertoolbar-property/

export const Dropzone = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Create a custom layout plugin with no additional tools
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar: () => null, // Hide the toolbar
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileURL = URL.createObjectURL(file);
      setSelectedFile(fileURL);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!selectedFile ? (
        <div className="w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">PDF (MAX. 20MB)</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div className="w-[25rem] h-[30rem] border border-gray-300 overflow-hidden">
              <Viewer
                fileUrl={selectedFile}
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
          <p className="text-center mt-4 text-gray-700">{selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};
