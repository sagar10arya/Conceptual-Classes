import React from 'react';

const ExamCard = ({ examName, description, onClick }) => {
  return (
    <div
      className="min-w-[150px] max-w-[300px] w-full h-40 bg-white shadow-lg rounded-lg overflow-hidden border 
       hover:bg-gray-300 hover:scale-105 transition-transform duration-300 ease-in-out 
       cursor-pointer flex items-center justify-center text-center"
      // onClick={onClick}
    >
      <div className="p-5">
        <h2 className="text-lg md:text-xl font-bold text-gray-600">{examName}</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ExamCard;
