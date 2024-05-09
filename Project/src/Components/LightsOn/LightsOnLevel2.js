import './LightsOn.css'; // Assuming your CSS is defined here
import React, { useState } from 'react';
import OffSvg from '../../Assets/Off1.svg';
import OnSvg from '../../Assets/On1.svg';
import SquareSvg from '../../Assets/Square.svg';
import TriangleSvg from '../../Assets/Triangle.svg';
import LightOffSvg from '../../Assets/LightOff.svg';
import LightOnSvg from '../../Assets/LightOn.svg';
import Line from './Line';


const ToggleButton = ({ index, handleLightToggle }) => {
  const [isOn, setIsOn] = useState(false); // State to manage the toggle

  const handleClick = () => {
      setIsOn(!isOn); // Toggle the state on click
      handleLightToggle(index, !isOn);
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



const LightBulb = ({ isOn }) => {
  return (
    <img src={isOn ? LightOnSvg : LightOffSvg} className="lightBulb" alt={isOn ? "Light On" : "Light Off"} />
  );
};




const LightsOnLevel1 = () => {
  const [lights, setLights] = useState([false, false, false, false, false, false, false, false]);
  const [isLightOn, setIsLightOn] = useState(false);

  const handleLightToggle = (index, isOn) => {
    const updatedLights = [...lights];
    updatedLights[index - 1] = isOn;
    setLights(updatedLights);
  };

  const handleSubmission = () => {
    if (
      (lights[0] && lights[1] && lights[2] && !lights[3] && lights[4] && lights[5] && !lights[6] && !lights[7]) ||
      (lights[0] && lights[1] && !lights[2] && lights[3] && lights[4] && lights[5] && !lights[6] && !lights[7]) ||
      (lights[0] && lights[1] && lights[2] && !lights[3] && !lights[4] && !lights[5] && lights[6] && !lights[7]) ||
      (lights[0] && lights[1] && lights[2] && !lights[3] && !lights[4] && !lights[5] && !lights[6] && lights[7]) ||
      (lights[0] && lights[1] && !lights[2] && lights[3] && !lights[4] && !lights[5] && lights[6] && !lights[7]) ||
      (lights[0] && lights[1] && !lights[2] && lights[3] && !lights[4] && !lights[5] && !lights[6] && lights[7])
    ) {
      setIsLightOn(true); 
      alert("Congratulations! You've won!");
    } else {
      setIsLightOn(false); 
      alert("Sorry, try again!");
    }
  };

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
          (Click on the switches to place and remove beavers. Press 'Submit' when you have finished.)
        </p>
      </div>
      <svg className="linesContainer" width="500%" height="500%">
          <Line startX={250} startY={500} endX={512} endY={500} className="line" />
          <Line startX={512} startY={500} endX={512} endY={600} className="line" />
          <Line startX={512} startY={600} endX={784} endY={600} className="line" />
          <Line startX={784} startY={600} endX={784} endY={700} className="line" />
          <Line startX={784} startY={700} endX={1040} endY={700} className="line" />
          <Line startX={1040} startY={700} endX={1040} endY={960} className="line" />
          <Line startX={1040} startY={960} endX={1300} endY={960} className="line" />
          <Line startX={250} startY={620} endX={512} endY={620} className="line" />
          <Line startX={250} startY={750} endX={512} endY={750} className="line" />
          <Line startX={512} startY={750} endX={512} endY={850} className="line" />
          <Line startX={250} startY={850} endX={784} endY={850} className="line" />
          <Line startX={784} startY={850} endX={784} endY={700} className="line" />
          <Line startX={250} startY={990} endX={512} endY={990} className="line" />
          <Line startX={512} startY={990} endX={512} endY={1040} className="line" />
          <Line startX={512} startY={1040} endX={780} endY={1040} className="line" />
          <Line startX={780} startY={1040} endX={780} endY={1170} className="line" />
          <Line startX={780} startY={1170} endX={1040} endY={1170} className="line" />
          <Line startX={1040} startY={1170} endX={1040} endY={960} className="line" />
          <Line startX={250} startY={1120} endX={512} endY={1120} className="line" />
          <Line startX={512} startY={1120} endX={512} endY={1040} className="line" />
          <Line startX={250} startY={1230} endX={512} endY={1230} className="line" />
          <Line startX={512} startY={1230} endX={512} endY={1290} className="line" />
          <Line startX={512} startY={1290} endX={780} endY={1290} className="line" />
          <Line startX={780} startY={1290} endX={780} endY={1170} className="line" />
          <Line startX={250} startY={1370} endX={512} endY={1370} className="line" />
          <Line startX={512} startY={1370} endX={512} endY={1290} className="line" />










        </svg>
      <div className="gameContainer">
      
        
      <div className="fixedContainer">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
            <ToggleButton key={index} index={index} handleLightToggle={handleLightToggle} />
          ))}
        </div>
      
      <Shape type="triangle" className="triangleShape" />
      <Shape type="square" className="squareShape" />
      <Shape type="triangle" className="triangleShape2" />
      <Shape type="square" className="squareShape2" />
      <Shape type="triangle" className="triangleShape3" />
      <Shape type="square" className="squareShape3" />
      <Shape type="triangle" className="triangleShape4" />
      <LightBulb isOn={isLightOn}/>
      <div className="submitButtonContainer">
            <button className="submitButton" onClick={handleSubmission}>Submit</button>
      </div>
      </div>
      </div>
  );
};
export default LightsOnLevel1;