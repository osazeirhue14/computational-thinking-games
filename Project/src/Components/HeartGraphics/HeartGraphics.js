import React, { useState } from "react";
import Heart from '../Heart';
import HeartSquare from '../HeartSquare';
import HeartCircle from '../HeartCircle';
import Styles from "./HeartGraphics.css";
import "./HeartGraphics.css";

const HeartGraphics = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (Ans) => {
    if (Ans === "One") {
      setMessage(<div className="correct"><br/>Correct!</div>);
    } else {
      setMessage(<div className="incorrect"><br/>Incorrect!</div>);
    } 
  };

  return (
    <div className="Styles.container">
    <div className="gameHeader">
      <h1>Heart Graphics</h1>
      <p className="gameDescription">
       Tom started with one circle and one square:
      </p>
    </div>
    <div className="shapesRow">
        <HeartSquare />
        <HeartCircle />
    </div>
      <p className="gameDescription">
      <br/>Then he created this heart from these shapes:<br/>
      </p>
    <Heart />
    <p className="gameDescription">
      Tom only used these kinds of operations on the shapes:<br/>
      -Rotate: Rotate the shape by any amount in either direction.<br/>
      -Move: Move the shape anywhere.<br/>
      -Duplicate: Create a copy of the shape at the same location.<br/><br/>
      Question:<br/>
      Which of the following sequence of operations could Tom have used?<br/><br/>
      </p>
    <div className="buttons">
            <button onClick={() => handleButtonClick("One")}>Duplicate circle. Rotate square. Move circle. Move circle.</button>
            <button onClick={() => handleButtonClick("Two")}>Duplicate square. Rotate square. Move square. Move circle.</button>
            <button onClick={() => handleButtonClick("Three")}>Duplicate circle. Rotate circle. Move circle. Move square.</button>
            <button onClick={() => handleButtonClick("Four")}>Move circle. Move square. Duplicate circle. Move square.</button>
    </div>
    <div className="message">{message}</div>
  </div>
  );
};

export default HeartGraphics;
