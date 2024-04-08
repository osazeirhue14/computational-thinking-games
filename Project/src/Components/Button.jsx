import React from 'react';
import { ReactComponent as ButtonSvg } from '../Assets/Button.svg';

const Button = () => {
  return (
    <div style={{ width: '50px', height: 'auto' }}>
      <ButtonSvg className="Button" />
    </div>
  );
}

export default Button;
