import React, { useState } from "react";
import MsIn from "../../Assets/MsIn.png";
import ex1 from "../../Assets/ex1.png";
import ex2 from "../../Assets/ex2.png";
import ex3 from "../../Assets/ex3.png";
import ex4 from "../../Assets/ex4.png";
import Styles from "./MissInfinity.module.css";
import Navbar from "../HomePage/Navbar";

const MissInfinity = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (day) => {
    if (day === "Friday") {
      setMessage(<span className={Styles.correct}>Correct!</span>);
    } else {
      setMessage(
        <div>
          <p>
            <span className={Styles.incorrect}>Incorrect!</span>
            <br />
            On Tuesday, students G and C start using the nickname, G talks to only one classmate (I) and this classmate used the nickname on Monday. C talks to 4 classmates and 3 of them used the nickname on Monday. 3 out of 4 classmates is more than half. So C also uses the nickname on Tuesday.
            <br />
            <img src={ex1} alt="Explanation 1" className={Styles.explanationImage} />
            <br />
            On Wednesday, B starts using the nickname.
            <br /> 
            <img src={ex2} alt="Explanation 2" className={Styles.explanationImage} />
            <br />
            On Thursday, E starts using the nickname.
            <br />
            <img src={ex3} alt="Explanation 3" className={Styles.explanationImage} />
            <br />
            And on Friday, F and G start using the nickname.
            <br />
            <img src={ex4} alt="Explanation 4" className={Styles.explanationImage} />
          </p>
        </div>
      );
    } 
  };

  return (
    <div className={Styles.container}>
      <Navbar />
      <h1 className={Styles.heading}>Miss Infinity</h1>
      <div className={Styles.content}>
        <div className={Styles.explanation}>
          <p>On Monday the class got a new Maths teacher.</p>
          <p>Three pupils, A, D and I, immediately started calling her “Miss Infinity”.</p>
          <p>The diagram below shows how the pupils talk to each other. For example, pupil H only talks to D, E and F during the day. The nickname spreads among the pupils like this:</p>
          <p>If a pupil hears more than half of the other pupils they talk to using the nickname, this pupil will also start using it the next day, and for the rest of the week.</p>
        </div>
        <img src={MsIn} alt="Miss Infinity" className={Styles.image} />
        <div className={Styles.question}>
          <p>Question:</p>
          <p>What is the first day of the week when all the pupils in the class use the nickname “Miss Infinity”?</p>
          <div className={Styles.buttons}>
            <button onClick={() => handleButtonClick("Tuesday")}>Tuesday</button>
            <button onClick={() => handleButtonClick("Wednesday")}>Wednesday</button>
            <button onClick={() => handleButtonClick("Thursday")}>Thursday</button>
            <button onClick={() => handleButtonClick("Friday")}>Friday</button>
          </div>
          <div className={Styles.message}>{message}</div>
        </div>
      </div>
    </div>
  );
};

export default MissInfinity;
