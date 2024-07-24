import React, { useState } from "react";
import Heart from '../Heart';
import HeartSquare from '../HeartSquare';
import HeartCircle from '../HeartCircle';
import Styles from "./HeartGraphics.css"; // Update the import statement

const HeartGraphics = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (Ans) => {
    if (Ans === "One") {
      setMessage(<span className={Styles.correct}>Correct!</span>);
    } else {
      setMessage(<span className={Styles.incorrect}>Incorrect!</span>);
    } 
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Heart Graphics</h1>
      <div className={Styles.content}>
        <div className={Styles.explanation}>
          <p>Tom started with one circle and one square:</p>
        </div>
        <HeartSquare />
        <HeartCircle />
        <div className={Styles.explanation}>
          <p>Then he created this heart from these shapes:</p>
        </div>
        <Heart />
        <div className={Styles.explanation}>
          <p>Tom only used these kinds of operations on the shapes:</p>
          <p>-Rotate: Rotate the shape by any amount in either direction.</p>
          <p>-Move: Move the shape anywhere.</p>
          <p>-Duplicate: Create a copy of the shape at the same location.</p>
        </div>
        <div className={Styles.question}>
          <p>Question:</p>
          <p>Which of the following sequence of operations could Tom have used?</p>
          <div className={Styles.buttons}>
            <button onClick={() => handleButtonClick("One")}>Duplicate circle. Rotate square. Move circle. Move circle.</button>
            <button onClick={() => handleButtonClick("Two")}>Duplicate square. Rotate square. Move square. Move circle.</button>
            <button onClick={() => handleButtonClick("Three")}>Duplicate circle. Rotate circle. Move circle. Move square.</button>
            <button onClick={() => handleButtonClick("Four")}>Move circle. Move square. Duplicate circle. Move square.</button>
          </div>
          <div className={Styles.message}>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default HeartGraphics;
