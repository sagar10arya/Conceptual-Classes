import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ExamCard from '../ExamCard'
import coursesData from '../../data/CourseData'

const Level = () => {
  const { courseId } = useParams(); // Fetch courseId from the URL
  const navigate = useNavigate();

  // Convert courseId to a number and find the course
  const course = coursesData.find((course) => course.id === Number(courseId));

  // Handle invalid courseId
  if (!course) {
    return <p className="text-center text-red-500">Course not found!</p>;
  }

  const handleCardClick = (levelName, examName) => {
    navigate(`/study-material/${courseId}/${course.category.toLowerCase().replace(/\s+/g, '-')}/${levelName}`);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center text-center justify-center p-10">
      <div className="w-full flex flex-col items-center">
        <p className="font-bold text-3xl md:text-4xl text-gray-700 mt-12">{course.category} Levels</p>
        <div className="w-36 h-1 border-b-4 border-blue-800 rounded-2xl mt-4"></div>
        <p className="font-bold text-xl md:text-2xl text-gray-700 mt-4">
          Choose your level.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8 justify-items-center">
          {course.levels.map((level) => (
            <ExamCard
              className=''
              key={level.name}
              examName={level.name}
              onClick={() => handleCardClick(level.name)} // Pass level name here
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Level;
