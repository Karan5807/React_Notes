import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ title, content, category, time, onDelet, onUpdate }) => {
  const [isComplete, setIsComplete] = useState(false);

  const Toggle = () => {
    setIsComplete((preValue) => !preValue);
  };

  const handleDelet = (e) =>{
    e.preventDefault();
    onDelet()
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate()
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

        {/* Content */}
        <p className="text-gray-600 mt-2">{content}</p>

        {/* Category */}
        <div className="mt-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
            {category}
          </span>
        </div>

        {/* Status */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <button
              onClick={Toggle}
              className={`inline-block text-xs font-semibold px-2 py-1 rounded-full ${
                isComplete
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {isComplete ? "Complete" : "Incomplete"}
            </button>
          </div>

          {/* Time */}
          <div className="text-sm text-gray-500">{time}</div>
        </div>

        {/* Category */}
        <div className=" flex items-center justify-between mt-4">
          <button className="inline-block bg-red-200 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide" onClick={handleDelet}>
            Delet
          </button>
          <button className="inline-block bg-yellow-200 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
