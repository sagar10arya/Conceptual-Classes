import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExamCard from "../ExamCard";
import coursesData from "../../data/CourseData";

function Chapters() {
  const { courseId, levelName, subjectId, subjectName } = useParams(); // Get route params
  const navigate = useNavigate();

  console.log("CourseId:: ", courseId);
  console.log("levelName:: ", levelName);
  console.log("subjectId:: ", subjectId);
  console.log("subjectName:: ", subjectName);

  // Find the course based on courseId
  const course = coursesData.find((c) => c.id === parseInt(courseId));
  // console.log(course);
  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
          <i className="fas fa-exclamation-circle text-9xl text-red-500 mb-4"></i>
          <p className="text-3xl text-red-500 font-semibold mb-4">
            Course not found!
          </p>
          <p className="text-xl text-gray-700">
            Please check the level or try again later.
          </p>
        </div>
      </div>
    );
  }

  // level 
  const level = course.levels.find(
    (lvl) =>
      lvl.name.toString() === levelName || // Match string-based level name
      lvl.name.toString() === subjectId || // Match string-based subjectId
      Number(lvl.name) === Number(levelName) || // Match number-based level name
      Number(lvl.name) === Number(subjectId) // Match number-based subjectId
  );

  // Use the matched level or fallback level
  const matchedLevel = level;

  // Show error if no level is matched
  if (!matchedLevel) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
          <i className="fas fa-exclamation-circle text-9xl text-red-500 mb-4"></i>
          <p className="text-3xl text-red-500 font-semibold mb-4">
            Level not found!
          </p>
          <p className="text-xl text-gray-700">
            Please check the level or try again later.
          </p>
        </div>
      </div>
    );
  }

  // Find the subject based on subjectId
  const matchedSubject = matchedLevel.subjects.find(
    (subject) => subject.name.toLowerCase() === subjectName.toLowerCase()
  );
  // console.log("Matched Subject::::", matchedSubject);

  if (!matchedSubject) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
          <i className="fas fa-exclamation-circle text-9xl text-red-500 mb-4"></i>
          <p className="text-3xl text-red-500 font-semibold mb-4">
            Subject not found!
          </p>
          <p className="text-xl text-gray-700">
            Please check the level or try again later.
          </p>
        </div>
      </div>
    );
  }

  const filteredChapters = matchedSubject.chapters;

  console.log("Filtered Chapters:", filteredChapters);
  const handleChapterClick = (resources, chapterName) => {
    // If a link exists in resources, open it in a new tab
    if (resources && resources[0]?.link) {
      window.open(resources[0].link, "_blank");
    } else {
      // Otherwise, navigate to the sanitized chapter route
      const sanitizedChapterName = chapterName
        .toLowerCase()
        .replace(/\s+/g, "-");
      navigate(
        `/study-material/${courseId}/${levelName}/${subjectId}/chapters/${sanitizedChapterName}`
      );
    }
  };

  // Render the UI
  return (
    <div className="w-full h-auto flex flex-col items-center text-center justify-center p-10">
      <div className="w-full flex flex-col items-center">
        {/* Page Header */}
        <p className="font-bold text-3xl md:text-4xl text-gray-700 mt-12">
          {`Chapters for ${matchedSubject.name} (Class ${matchedLevel.name})`}
        </p>
        <div className="w-36 h-1 border-b-4 border-blue-800 rounded-2xl mt-4"></div>
        <p className="font-bold text-xl md:text-2xl text-gray-700 mt-4">
          Explore the chapters and their available resources.
        </p>

        {/* Grid of Chapters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 place-items-center">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chapter) => (
              <ExamCard
                key={chapter.name}
                examName={chapter.name}
                // description={`${chapter.resources.length || 0} Resources`}
                description="Notes + PYQs + NCERT"
                onClick={() => handleChapterClick(chapter.resources ,chapter.name)}
              />
            ))
          ) : (
            <p>No chapters available for this subject.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chapters;
