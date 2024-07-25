import React, { useState } from "react";
import Cipher8Pic from '../Cipher8Pic';
import Styles from "./Cipher8.css";
import "./Cipher8.css";

const Cipher8 = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (Ans) => {
    if (Ans === "Four") {
      setMessage(<div className="correct"><br/>Correct!</div>);
    } else {
      setMessage(<div className="incorrect"><br/>Incorrect!</div>);
    } 
  };

  return (
    <div className="Styles.container">
    <div className="gameHeader">
      <h1>Cipher 8</h1>
      <p className="gameDescription">
      An octagon, has three or four letters written at the corners. An arrow points from the center of the octagon to a letter group. The arrow can rotate clockwise.<br/>
      </p>
    </div>
    <Cipher8Pic />
    <p className="gameDescription">
    <br/>Messages can be encrypted using the octagon and arrow.<br/>
    At the beginning of the encryption of a new message, the arrow always points to the letters ABC.<br/>
    Each letter of the message is encrypted so that:<br/>
      -The first number indicates how many corners of the octagon the arrow should be rotated, from its current position.<br/>
      -The second number indicates the position of the encrypted letter in the letter group to which the arrow points.<br/>
      Example:<br/>
      TREE is encrypted with the sequence 62-73-42-02.<br/>
      Question:<br/>
      What is the encrypted message for WATER?<br/>
      </p>
      <br/>
    <div className="buttons">
            <button onClick={() => handleButtonClick("One")}>72-11-26-32-53</button>
            <button onClick={() => handleButtonClick("Two")}>62-11-62-22-43</button>
            <button onClick={() => handleButtonClick("Three")}>62-11-26-22-53</button>
            <button onClick={() => handleButtonClick("Four")}>72-11-62-32-43</button>
    </div>
    <div className="message">{message}</div>
  </div>
  );
};

export default Cipher8;
