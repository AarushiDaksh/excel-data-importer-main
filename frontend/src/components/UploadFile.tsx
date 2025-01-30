import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../services/api";

const UploadFile: React.FC<{ onUploadSuccess: (data: any) => void }> = ({ onUploadSuccess }) => {
  const [error, setError] = useState<string | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"] },
    maxSize: 2 * 1024 * 1024, // 2MB
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        setError("Invalid file. Please upload a .xlsx file under 2MB.");
        return;
      }

      try {
        const response = await uploadFile(acceptedFiles[0]);
        onUploadSuccess(response.data);
      } catch (err) {
        setError("Failed to upload file.");
      }
    },
  });

  return (
    <div className="p-6 border border-dashed rounded-lg text-center">
      <div {...getRootProps()} className="cursor-pointer">
        <input {...getInputProps()} />
        <p>Drag & drop an Excel file here, or click to select one.</p>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default UploadFile;
