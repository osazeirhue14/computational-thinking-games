import React from 'react';

const Line = ({ startX, startY, endX, endY, className }) => {

  return (
    <line
      x1={startX}
      y1={startY}
      x2={endX}
      y2={endY}
      className={className}
    />
  );
};

export default Line;