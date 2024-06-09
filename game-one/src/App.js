import React, { useState } from 'react';
import './App.css';
import Button from './components/Button'; // Import your SVG button component
import Beaver from './components/Beaver';

function App() {
  // Define game state
  const [buttonsState, setButtonsState] = useState(Array(8).fill(false));

  // Function to toggle button state
  const toggleButton = (index) => {
    const newButtonsState = [...buttonsState];
    newButtonsState[index] = !newButtonsState[index];
    setButtonsState(newButtonsState);
  };

  // Function to handle button click
  const handleButtonClick = (index) => {
    toggleButton(index);
  };

  return (
    <div className="App">
      <div className="game-board">
        <div className="buttons-container">
          {buttonsState.map((buttonState, index) => (
            <div key={index} className="button-wrapper" onClick={() => handleButtonClick(index)}>
              {buttonState ? <Beaver /> : <Button />} {/* Use your Button SVG component */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
