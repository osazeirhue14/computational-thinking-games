import React from 'react';
import Beaver from '../Beaver';
import Bulb from '../Bulb';
import Button from '../Button';
import Line from '../Line';
import Square from '../Square';
import Triangle from '../Triangle';
import './LightsOn.css'

const LightsOn = () => {
  return (
    <div className="LightsOn">
      <div className="game-board">
        <div className="buttons-container">
          <Beaver />
          <Bulb />
          <Button />
          <Line />
          <Square />
          <Triangle />
        </div>
      </div>
    </div>
  );
}

export default LightsOn;