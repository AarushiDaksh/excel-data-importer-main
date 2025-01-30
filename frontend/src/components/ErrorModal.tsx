import React from "react";

const ErrorModal: React.FC<{ errors: any[]; onClose: () => void }> = ({ errors, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-2">Validation Errors</h2>
        {errors.map((error, index) => (
          <p key={index} className="text-red-500">{`Sheet: ${error.sheet}, Row: ${error.row} - ${error.errors.join(", ")}`}</p>
        ))}
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
