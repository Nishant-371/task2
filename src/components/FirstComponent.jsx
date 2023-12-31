import React, { useState } from "react";
import FileUpload from "./FileUpload";

const FirstComponent = ({ File }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    // Do any processing or state updates with the uploaded file here
    setUploadedFile(file);
  };

  return (
    <div>
      <div className="w-[70vh] border-2 rounded-sm border-gray-300 shadow-lg h-[26vh]">
        <div className="p-5 flex">
          <div className="font-medium">Step 1 :</div>
          <div className="ml-4 px-3">Select File</div>
        </div>
        <div>
          <div className="ml-4 px-20 flex">
            {/* Pass the callback to handle file upload */}
            <FileUpload onFileUpload={handleFileUpload} />
            <div className="pl-[2ch]">
              {uploadedFile == null ? (
                <p>choose file</p>
              ) : (
                <div className="">
                  {/* <p>File selected in FirstComponent:</p> */}
                  <p>{uploadedFile.name}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-24">Supported File Type(s):.CSV,.JSON</div>
      </div>
    </div>
  );
};

export default FirstComponent;
