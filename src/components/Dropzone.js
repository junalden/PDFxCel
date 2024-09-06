import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export const Dropzone = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: () => [], // Do not render any sidebar tabs
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      const fileURL = URL.createObjectURL(file);
      setSelectedFile(fileURL);
      setFileName(file.name);
      onFileSelect(file); // Call the onFileSelect prop function
    }
  };

  return (
    <div className="flex flex-col items-center h-fit shadow-md py-3 px-4 h-[95vh] pb-6">
      {!selectedFile ? (
        <div className="w-full">
          <h2 className="text-xl font-bold mb-4 pl-2">Select and Upload PDF</h2>
          <div>
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
          <div className="h-6"></div>
          <div>
            <h2 className="text-xl font-bold mb-4 pl-2">Quick Guide</h2>
            <div className="px-4 pb-5">
              {/* Video Player */}
              <div className="relative pt-[56.25%]">
                {" "}
                {/* 16:9 aspect ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/T42tb9T66EQ?controls=1&showinfo=0&rel=0&modestbranding=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={false}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[85vh] flex flex-col items-center overflow-hidden">
          <h2 className="text-xl font-bold mb-4 pl-2">PDF Preview</h2>
          <div className="w-full h-full overflow-auto">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={selectedFile}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={1} // Adjust the scale as needed
              />
            </Worker>
          </div>
          <p className="text-center mt-4 text-gray-700">
            {fileName ? fileName : "No file selected"}
          </p>
        </div>
      )}
    </div>
  );
};
