import { useState } from "react";
import { Dropzone } from "./Main/Dropzone";
import { DataConvertMatrix } from "./Main/DataConvertMatrix";
import { ProcessButton } from "./Main/ProcessButton";

export const Main = () => {
  const [file, setFile] = useState(null);
  const [prompts, setPrompts] = useState([]);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleDataChange = (data) => {
    setPrompts(data);
  };

  return (
    <main className="flex flex-col md:flex-row">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div>
          <Dropzone onFileSelect={handleFileSelect} />
        </div>

        <div>
          <DataConvertMatrix onDataChange={handleDataChange} />
          <ProcessButton file={file} prompts={prompts} />
        </div>
      </div>

      {/* <Footer /> */}
    </main>
  );
};
