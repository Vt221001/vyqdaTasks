import React from "react";

const Modal = ({ title, description, onSave, onClose, setDescription }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <textarea
          value={description}
          type="text"
          placeholder="Take a note..."
          className="w-full h-32 mb-4 px-1 rounded-lg border border-gray-300 shadow-sm outline-none"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={onSave}
          className="px-4 mr-2 py-2 bg-green-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-400 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
