import React, { useState } from "react";
import { SelectComponent } from "../Service";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  if (!isOpen) return null;

  const options = ["Home", "Work", "Personal"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues, // Keep previous form values
      [name]: value, // Update the value of the changed input
    }));
  };

  const handleSelect = (value) => {
    console.log("Selected value:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Create Your Note</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-left">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Title..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-left">Content</label>
            <input
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Content here..."
            />
          </div>
          <div className="mb-4">
            <SelectComponent options={options} onSelect={handleSelect} />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
