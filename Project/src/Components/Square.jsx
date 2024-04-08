import React from 'react';
import { ReactComponent as SquareSvg } from '../Assets/Square.svg';

const Square = () => {
  return (
    <div style={{ width: '50px', height: 'auto' }}>
      <SquareSvg className="Square" />
    </div>
  );
}

export default Square;