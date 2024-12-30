import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExamCard from "../ExamCard";
import coursesData from "../../data/CourseData";

function Subject() {
  const { courseId, levelName, subjectId } = useParams();
  const navigate = useNavigate();

  // console.log("levelName:: ", levelName);
  // console.log("SubjectId:: ", subjectId);

  // Find the course using the courseId
  const course = coursesData.find((course) => course.id === Number(courseId));

  // Show error if course not found
  if (!course) {
    return <p className="text-center text-red-500">Course not found!</p>;
  }

  // console.log("Course levels:", course.levels);
  course.levels.forEach((lvl) => console.log("Level Name:", lvl.name));

  // level code**************************************************************************************
  // Find the level using identifier (no sanitization required)
  const level = course.levels.find((lvl) => Number(lvl.name) === Number(subjectId));

  // If no level is found
  if (!level) {
    return <p className="text-center text-red-500">Level not found!</p>;
  }

  // ***************************************************************************************************
  // Navigate to the subject-specific page on click
  const handleSubjectClick = (subjectName) => {
    // navigate(`/study-material/${courseId}/${levelName}/${subjectName}`);
    console.log("Subbbb::", subjectName);
    navigate(
      `/study-material/${courseId}/${levelName}/${subjectId}/${subjectName}/chapters`
    );
  };


  // Render the UI
  return (
    <div className="w-full h-auto flex flex-col items-center text-center justify-center p-10">
      <div className="w-full flex flex-col items-center">
        {/* Page Header */}
        <p className="font-bold text-3xl md:text-4xl text-gray-700 mt-12">
          {`Subjects for Class ${level.name} (${course.category})`}
        </p>
        <div className="w-36 h-1 border-b-4 border-blue-800 rounded-2xl mt-4"></div>
        <p className="font-bold text-xl md:text-2xl text-gray-700 mt-4">
          Explore the subjects and their available resources.
        </p>

        {/* Grid of Subjects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 place-items-center">
          {level.subjects.map((subject) => (
            <ExamCard
              key={subject.name}
              examName={subject.name}
              // description={`${subject.resources.length} Resources`}
              onClick={() => handleSubjectClick(subject.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subject;
