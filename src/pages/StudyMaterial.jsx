import React from 'react';
import { ExamCard } from '../components';
import { Outlet, useNavigate } from 'react-router-dom';
import coursesData from '../data/CourseData';

const StudyMaterial = () => {
  const navigate = useNavigate();

  const handleCardClick = (courseId, examName) => {
    navigate(`/study-material/${courseId}/${examName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center text-center p-10">
      <div className="w-full flex flex-col items-center">
        <p className="font-bold text-3xl md:text-4xl text-gray-700 mt-12">Your Study Corner</p>
        <div className="w-36 h-1 border-b-4 border-blue-800 rounded-2xl mt-4"></div>
        <p className="font-bold text-xl md:text-2xl text-gray-700 mt-4">
          Explore comprehensive study materials for various exams.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
          {coursesData.map((course) => (
            <ExamCard
              key={course.id}
              examName={course.category}
              description={course.description}
              onClick={() => handleCardClick(course.id, course.category)}
            />
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default StudyMaterial;
