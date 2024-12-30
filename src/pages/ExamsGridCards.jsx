import React from 'react';
import { ExamCard } from '../components';

const exams = [
  { id: 1, name: 'JEE', description: 'Joint Entrance Examination for Engineering.' },
  { id: 2, name: 'NEET', description: 'National Eligibility Entrance Test for Medical.' },
  { id: 3, name: 'JEE Advanced', description: 'Joint Entrance Examination for Engineering Advanced.' },
  { id: 4, name: 'CUET', description: 'Common University Entrance Examination.' },
  { id: 5, name: 'Boards', description: 'CBSE' },
];

const ExamCardsGrid = () => {
  const handleCardClick = (examName) => {
    alert(`You clicked on ${examName}!`);
    // yaha se hum card ko uske route pe navigate krenge
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-6">
      {exams.map((exam) => (
        <ExamCard
          key={exam.id}
          examName={exam.name}
          description={exam.description}
          onClick={() => handleCardClick(exam.name)}
        />
      ))}
    </div>
  );
};

export default ExamCardsGrid;
