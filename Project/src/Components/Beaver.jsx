import React from 'react';
import { ReactComponent as BeaverSvg } from '../Assets/Beaver.svg';

const Beaver = () => {
  return (
    <div style={{ width: '50px', height: 'auto' }}> {/* Apply inline styles */}
      <BeaverSvg /> {/* No need to apply CSS class */}
    </div>
  );
}

export default Beaver;