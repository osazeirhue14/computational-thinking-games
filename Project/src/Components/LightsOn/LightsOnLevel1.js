import './LightsOn.css'; // Assuming your CSS is defined here
import React, { useState } from 'react';
import OffSvg from '../../Assets/Off1.svg';
import OnSvg from '../../Assets/On1.svg';
import SquareSvg from '../../Assets/Square.svg';
import TriangleSvg from '../../Assets/Triangle.svg';
import LightOffSvg from '../../Assets/LightOff.svg';
import Line from './Line';


const ToggleButton = ({ index }) => {
  const [isOn, setIsOn] = useState(false); // State to manage the toggle

  const handleClick = () => {
      setIsOn(!isOn); // Toggle the state on click
  };

  return (
      <div onClick={handleClick} style={{ cursor: 'pointer', margin: '10px' }}>
          {isOn ? <img src={OnSvg} className="toggleButtonImg" alt={`Beaver ${index}`} />
                : <img src={OffSvg} className="toggleButtonImg" alt={`Button ${index}`} />}
      </div>
  );
};

const Shape = ({ type, className }) => {
  return (
    <img src={type === 'triangle' ? TriangleSvg : SquareSvg} className={className} alt={type} />
  );
};



const LightBulb = () => {
  return (
    <img src={LightOffSvg} className="lightBulb" alt="Light Off" />
  );
};



const LightsOnLevel1 = () => {
  return (
    <div>

      <div className="gameHeader">
        <h1>Lights On Level 1</h1>
        <p className="gameDescription">
          Beaver Sofia and her group of friends are playing a game called 'Lights On'.<br/><br/>
          The game has 8 large buttons which, when stood on, send a signal down a wire.<br/>
          These wires pass through some triangular or square boxes before eventually reaching a light bulb.<br/><br/>
          - A triangle will only send a signal if BOTH incoming wires send it a signal.<br/>
          - A square will send on a signal if only ONE of the incoming wires send it a signal.<br/><br/>
          The friends win the game if they can turn the light on.<br/>
          Task:<br/>
          Select which buttons the beavers could stand on to turn on the light and win the game.<br/>
          (Click on the switches to place and remove beavers. Press 'Save' when you have finished.)
        </p>
      </div>
      <svg className="linesContainer" width="500%" height="500%" style={{ position: 'absolute', top: 0, left: 0 }}>
          <Line startX={300} startY={500} endX={635} endY={500} className="line" />
          <Line startX={634} startY={500} endX={634} endY={600} className="line" />
          <Line startX={634} startY={600} endX={975} endY={600} className="line" />
          <Line startX={974} startY={600} endX={974} endY={700} className="line" />
          <Line startX={974} startY={700} endX={1295} endY={700} className="line" />
          <Line startX={1295} startY={700} endX={1295} endY={960} className="line" />
          <Line startX={1295} startY={960} endX={1600} endY={960} className="line" />
          <Line startX={300} startY={620} endX={635} endY={620} className="line" />
          <Line startX={300} startY={750} endX={635} endY={750} className="line" />
          <Line startX={634} startY={750} endX={634} endY={860} className="line" />
          <Line startX={300} startY={850} endX={975} endY={850} className="line" />
          <Line startX={974} startY={850} endX={974} endY={700} className="line" />

        </svg>
      <div className="gameContainer">
      
        
      <div className="fixedContainer">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
              <ToggleButton key={index} index={index} />
          ))}
      </div>
      
      <Shape type="triangle" className="triangleShape" />
      <Shape type="square" className="squareShape" />
      <Shape type="triangle" className="triangleShape2" />
      <Shape type="square" className="squareShape2" />
      <Shape type="triangle" className="triangleShape3" />
      <Shape type="square" className="squareShape3" />
      <Shape type="triangle" className="triangleShape4" />
      <LightBulb/>
      <div className="submitButtonContainer">
        <button className="submitButton">Submit</button>
      </div>
      </div>
      </div>
  );
};
export default LightsOnLevel1;