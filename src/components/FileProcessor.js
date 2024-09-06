import React, { useState } from "react";
import { Dropzone } from "./Dropzone";
import { ProcessButton } from "./ProcessButton";

export const FileProcessor = () => {
  const [file, setFile] = useState(null);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  return (
    <div className="container mx-auto p-4">
      <Dropzone onFileSelect={handleFileSelect} />
      <ProcessButton file={file} />
    </div>
  );
};
