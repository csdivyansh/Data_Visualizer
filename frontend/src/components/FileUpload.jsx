import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileUp, AlertCircle, CheckCircle } from "lucide-react";
import Loader from "./Loader";

const FileUpload = ({
  onFileUpload,
  loading = false,
  error = null,
  success = false,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];

        // Validate file type
        const validExtensions = ["csv", "xlsx", "xls"];
        const fileExtension = file.name.split(".").pop().toLowerCase();

        if (!validExtensions.includes(fileExtension)) {
          alert("Please upload a CSV or Excel file");
          return;
        }

        setSelectedFile(file);
        onFileUpload(file);
      }
    },
    [onFileUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls"],
    },
    multiple: false,
  });

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      {loading ? (
        <div className="text-center">
          <Loader message="Uploading and analyzing your file..." />
          {selectedFile && (
            <p className="mt-4 text-slate-400">File: {selectedFile.name}</p>
          )}
        </div>
      ) : success ? (
        <div className="text-center animate-slide-in">
          <div className="mb-4 flex justify-center">
            <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full">
              <CheckCircle size={48} className="text-green-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-slate-100 mb-2">
            File Uploaded Successfully!
          </h3>
          <p className="text-slate-400 mb-4">Your data is being visualized</p>
          {selectedFile && (
            <p className="text-sm text-slate-500">File: {selectedFile.name}</p>
          )}
        </div>
      ) : (
        <div className="w-full max-w-md">
          <div
            {...getRootProps()}
            className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer ${
              isDragActive
                ? "border-blue-500 bg-blue-500/10 scale-105"
                : "border-slate-600 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800"
            }`}
          >
            <input {...getInputProps()} />

            <div className="mb-4 flex justify-center">
              <div
                className={`p-4 rounded-full transition-all ${
                  isDragActive
                    ? "bg-blue-500/20"
                    : "bg-slate-700/50 group-hover:bg-slate-700"
                }`}
              >
                <Upload
                  size={40}
                  className={`${isDragActive ? "text-blue-400" : "text-slate-400"}`}
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-100 mb-2">
              {isDragActive ? "Drop your file here" : "Drag & Drop your file"}
            </h3>

            <p className="text-sm text-slate-400 mb-4">
              or click to browse your computer
            </p>

            <div className="space-y-2 text-xs text-slate-500">
              <p>✓ Supported formats: CSV, XLSX</p>
              <p>✓ Maximum file size: 50MB</p>
              <p>✓ Data is processed securely</p>
            </div>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex gap-3 animate-slide-in">
              <AlertCircle
                size={20}
                className="text-red-400 flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="text-sm font-semibold text-red-400">
                  Upload Error
                </p>
                <p className="text-xs text-red-300 mt-1">{error}</p>
              </div>
            </div>
          )}

          {selectedFile && !error && (
            <div className="mt-4 p-4 bg-slate-700/50 border border-slate-600 rounded-lg flex gap-3">
              <FileUp
                size={20}
                className="text-blue-400 flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
