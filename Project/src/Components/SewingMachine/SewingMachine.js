import React, { useState } from "react";
import Sewing1 from '../Sewing1';
import Sewing2 from '../Sewing2';
import Styles from "./SewingMachine.css";
import "./SewingMachine.css";

const SewingMachine = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (Ans) => {
    if (Ans === "Three") {
      setMessage(<div className="correct"><br/>Correct!</div>);
    } else {
      setMessage(<div className="incorrect"><br/>Incorrect!</div>);
    } 
  };

  return (
    <div className="Styles.container">
    <div className="gameHeader">
      <h1>Sewing Machine</h1>
      <p className="gameDescription">
      Havel has a programmable sewing machine.<br/>
       The machine can sew a '+' stitch or a 'x' stitch. It can also move the fabric forward 1 stitch space.<br/>
       The sewing machine can sew both of the stitches in the same place (in any order), to get a '*' stitch.<br/>
       The program for the machine consists of a sequence of characters +, x and →.<br/>
       When sewing fabric, the machine keeps repeating the program while the pedal is held down.<br/><br/>
       Example:<br/>
       Running the program + → + x → x → will sew this pattern:<br/>
      </p>
    </div>
    <Sewing2 />
    <p className="gameDescription">
    <br/>Question:<br/>
      Which program did Havel enter into the machine to get the following pattern?<br/><br/>
      </p>
      <Sewing1 />
      <br/>
    <div className="buttons">
            <button onClick={() => handleButtonClick("One")}>x → x → x + → x → + x → x → x →</button>
            <button onClick={() => handleButtonClick("Two")}>x → x → x + → x → x →</button>
            <button onClick={() => handleButtonClick("Three")}>x → x → x + → x → + x →</button>
            <button onClick={() => handleButtonClick("Four")}>+ x → + x → x → + x → x →</button>
    </div>
    <div className="message">{message}</div>
  </div>
  );
};

export default SewingMachine;
