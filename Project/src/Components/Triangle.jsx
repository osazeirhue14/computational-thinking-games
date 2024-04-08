import React from 'react';
import { ReactComponent as TriangleSvg } from '../Assets/Triangle.svg';

const Triangle = () => {
  return (
    <div style={{ width: '50px', height: 'auto' }}>
      <TriangleSvg className="Triangle" />
    </div>
  );
}

export default Triangle;