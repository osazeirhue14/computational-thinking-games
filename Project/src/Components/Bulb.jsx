import React from 'react';
import { ReactComponent as BulbSvg } from '../Assets/Bulb.svg';

const Bulb = () => {
  return (
    <div style={{ width: '50px', height: 'auto' }}>
      <BulbSvg className="Bulb" />
    </div>
  );
}

export default Bulb;