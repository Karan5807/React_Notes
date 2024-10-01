import React from "react";
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
  const Navi = useNavigate();
  const handleBack = () => {
    Navi("/");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-red-800">
      <div className="mx-auto w-1/2 text-center animate-slidein text-white-A700 font-semibold text-4xl">
        <h1>Opps! We ran out of code</h1>
        <div className="container m-2.5">
          <button
            onClick={handleBack}
            className=" border-2 border-sky-500 bg-black text-center animate-slidein text-white font-semibold text-2xl p-2 m-2 rounded-md"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export const Loader = () => {
  return (
    <div className="justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      <h2>Wait....</h2>
    </div>
  );
};
