import React from "react";
import { useParams } from "react-router-dom";

const MaterialDetail = () => {
  const { examName } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col justify-center items-center px-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Study Material for {examName.replace(/-/g, " ")}
      </h1>
      <p className="text-lg mb-6 text-center max-w-2xl">
        This page will contain all the resources and notes for{" "}
        {examName.replace(/-/g, " ")}.
      </p>
      {/* Add more content like notes, links, videos, etc. */}
    </div>
  );
};

export default MaterialDetail;