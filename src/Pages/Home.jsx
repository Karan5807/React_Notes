import React, { useState, useEffect } from "react";
import { SearchComponent } from "../Service";
import Card from "./Card";
import Modal from "./Modal";
const Home = () => {
  const [Notes, setNotes] = useState(() => {
    const savedTask = window.localStorage.getItem("List");
    return savedTask ? JSON.parse(savedTask) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data) => {
    setNotes((prevNote) => [...prevNote, data]);
    setIsModalOpen(false);
  };

  const handleUpdate = (id,newContent) =>{
    setIsModalOpen(true);
    const updateNotes = Notes.map((data,idx)=>idx === id ? newContent:data);
    console.log(updateNotes);
    setNewContent(updateNotes)
  }

  useEffect(() => {
    window.localStorage.setItem("List", JSON.stringify(Notes));
    console.log(Notes);
  }, [Notes]);

  return (
    <div className="container">
      <SearchComponent />
      {/* Section for Button */}
      <div className="flex justify-center space-x-4 mt-10">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          All
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Day
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Week
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Month
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
      {/* Section for Display Notes */}
      <div className="flex flex-row flex-wrap">
        {Notes.map((dt, idx) => (
          <Card
            key={idx}
            title={dt.title}
            content={dt.content}
            category={dt.category}
            complete={dt.complete}
            time={dt.createdAt}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
