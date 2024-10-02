import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const intialState = {
    title: "",
    content: "",
    category: "",
    createdAt: Date.now(),
  };
  const [formData, setFormData] = useState(intialState);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData)
    setFormData(intialState);
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
            <div className="w-full max-w-xs">
              <label className="block text-gray-700 mb-2">
                Select an Option
              </label>
              <select
                className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Option</option>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
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
