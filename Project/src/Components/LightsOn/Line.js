import React from 'react';

const Line = ({ startX, startY, endX, endY, className }) => {
  const lineStyle = {
    strokeWidth: 2,
    stroke: 'black',
  };

  return (
    <line
      x1={startX}
      y1={startY}
      x2={endX}
      y2={endY}
      className={className}
      style={lineStyle}
    />
  );
};

export default Line;