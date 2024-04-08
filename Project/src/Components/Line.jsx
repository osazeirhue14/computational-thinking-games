import React from 'react';
import { ReactComponent as LineSvg } from '../Assets/Line.svg';

const Line = () => {
  return (
    <div>
      <LineSvg style={{ width: '50px', height: 'auto' }} /> {/* Apply styles directly to the SVG */}
    </div>
  );
}

export default Line;