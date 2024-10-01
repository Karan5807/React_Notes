import React, { useState } from "react";
import { SearchComponent } from "../Service";
import Modal from "./Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <div className="h-screen">
      <SearchComponent />
      {/* Section for Button */}
      <div className="flex justify-center space-x-4 mt-10">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          All
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Home
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Work
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Personal
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={handleOpenModal}
        >
          + Add Notes
        </button>
      </div>
      {/* Section for Modal for Data */}
      <div className="min-h-screen flex items-center justify-center">
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Home;
