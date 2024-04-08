import React, { useState } from 'react';
import Beaver from '../Beaver';
import Bulb from '../Bulb';
import Button from '../Button';
import Line from '../Line';
import Square from '../Square';
import Triangle from '../Triangle';

const LightsOnGame = () => {
  // State to track the state of each button (ON/OFF)
  const [buttonState, setButtonState] = useState(Array(8).fill(false));

  // Function to toggle the state of a button
  const toggleButton = (index) => {
    const newButtonState = [...buttonState];
    newButtonState[index] = !newButtonState[index];
    setButtonState(newButtonState);
  };

  // Function to check if a button is ON
  const isButtonOn = (index) => {
    return buttonState[index];
  };

  // Function to check if both wires are ON
  const areWiresOn = () => {
    return buttonState[0] && buttonState[1];
  };

  // Function to check if exactly one wire is ON
  const isOneWireOn = () => {
    return (buttonState[2] && !buttonState[3]) || (!buttonState[2] && buttonState[3]);
  };

  // Function to check if the light bulb is ON
  const isLightOn = () => {
    return areWiresOn() && (isOneWireOn() || !buttonState[4]);
  };

  return (
    <div className="lights-on-game">
      <div className="game-board">
        <div className="buttons">
          <Button isOn={isButtonOn(0)} onClick={() => toggleButton(0)} />
          <Button isOn={isButtonOn(1)} onClick={() => toggleButton(1)} />
          <Button isOn={isButtonOn(2)} onClick={() => toggleButton(2)} />
          <Button isOn={isButtonOn(3)} onClick={() => toggleButton(3)} />
          <Button isOn={isButtonOn(4)} onClick={() => toggleButton(4)} />
          <Button isOn={isButtonOn(5)} onClick={() => toggleButton(5)} />
          <Button isOn={isButtonOn(6)} onClick={() => toggleButton(6)} />
          <Button isOn={isButtonOn(7)} onClick={() => toggleButton(7)} />
        </div>
        <Line isOn={areWiresOn()} />
        <Triangle isOn={isOneWireOn()} />
        <Square isOn={!isOneWireOn()} />
        <Bulb isOn={isLightOn()} />
      </div>
      <div className="game-info">
        <p>{isLightOn() ? 'Congratulations! You turned on the light!' : 'Keep trying to turn on the light!'}</p>
      </div>
    </div>
  );
};

export default LightsOnGame;
