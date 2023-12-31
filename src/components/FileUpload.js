import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Ensure only one file is selected
      const selectedFile = acceptedFiles[0];

      // Log the selected file to the console
      console.log(selectedFile);

      // Pass the file to the parent component if a callback is provided
      if (onFileUpload) {
        onFileUpload(selectedFile);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1, // Limit the number of files to 1
  });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the file here...</p> : <p>Choose file</p>}
    </div>
  );
};

const dropzoneStyles = {
  border: "2px solid #ccc",
  borderRadius: "4px",
  width: "100px",
  textAlign: "center",
  cursor: "pointer",
};

export default FileUpload;
