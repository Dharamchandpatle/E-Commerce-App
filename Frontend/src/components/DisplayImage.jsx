import React from "react";
import { CgClose } from "react-icons/cg";


const DisplayImage = ({ imgUrl, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50">
      <div className="bg-white shadow-lg rounded-lg max-w-5xl mx-auto p-4 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-3xl hover:text-red-600 cursor-pointer"
          onClick={onClose}
        >
           <CgClose size={28} />
        </button>

        {/* Image Display */}
        <div className="flex justify-center p-4 max-w-[80vw] max-h-[80vh]">
          <img
            src={imgUrl}
            alt="Displayed"
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayImage;
