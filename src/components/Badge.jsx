import React from 'react';

const Badge = ({ text }) => {
  return (
    <span className="absolute -top-2 -right-7 bg-red-500
     text-white text-xs px-1 py-0.5 rounded-full">
      {text}
    </span>
  );
};

export default Badge;
