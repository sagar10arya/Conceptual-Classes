import React from 'react';

function Logo({ imageSrc, altText = 'Logo', className = '' }) {
  return (
    <div className={`flex items-center h-full`}>
      <img
        className={`object-contain ${className}`}
        src={imageSrc}
        alt={altText}
      />
    </div>
  );
}

export default Logo;
