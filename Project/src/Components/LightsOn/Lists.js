import React, { useState } from "react";
import Num1 from "../../Assets/Num1.png";
import Num2 from "../../Assets/Num2.png";
import Styles from "./Lists.module.css";
import Navbar from "../HomePage/Navbar";

const Lists = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (number) => {
    if (number === "4") {
      setMessage(<span className={Styles.correct}>Correct!</span>);
    } else {
      setMessage(
        <div>
          <p>
            <span className={Styles.incorrect}>Incorrect!</span>
            <br />
            <span>(C 3) = 4, so (B (C 3)) = (B 4) = 3, so (A (B (C 3))) = (A (B 4)) = (A 3) = 4.</span>
            <br />
            <span>This can be shown by substituting these values working from the inside out:</span>
            <br />
            <span>(A (B (C 3))) → (A (B (4))) → (A (3)) → (4)</span>
          </p>
        </div>
      );
    }
  };

  return (
    <div className={Styles.container}>
      <Navbar />
      <h1 className={Styles.heading}>Lists</h1>
      <div className={Styles.content}>
        <div className={Styles.explanation}>
          <p>We can represent a list of numbers 3,5,2,4,1 visually as follows.</p>
          <p>The smaller red numbers indicate the positions in the list.</p>
          <p>We write (X 2) to describe the number at position 2. So (X 2) is 5. Similarly (X 5) is 1.</p>
          <p>The positions can be indicated indirectly, for example:
          (X (X 3)) is 5 because (X 3) is 2, so (X (X 3)) = (X 2) = 5.</p>
          <img src={Num1} alt="Explanation 1" className={Styles.explanationImage} />
        </div>
        <img src={Num2} alt="Num 1" className={Styles.image} />
        <div className={Styles.question}>
          <p>Question:</p>
          <p>What is the number described by (A (B (C 3)))?</p>
          <div className={Styles.buttons}>
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
          </div>
          <div className={Styles.message}>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
