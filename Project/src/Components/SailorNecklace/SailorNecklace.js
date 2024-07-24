import React, { useState } from "react";
import Sailor1 from '../Sailor1';
import Sailor2 from '../Sailor2';
import Sailor3 from '../Sailor3';
import Sailor4 from '../Sailor4';
import Sailorneck from '../Sailorneck';
import Styles from "./SailorNecklace.css";
import "./SailorNecklace.css";


const SailorNecklace = () => {
    const [message, setMessage] = useState("");

    const handleSailorClick = (sailorNumber) => {
        if (sailorNumber === 4) {
          setMessage(<div className="correct">Correct!</div>);
        } else {
          setMessage(<div className="incorrect">Incorrect!</div>);
        }
    }

  return(
  <div className="Styles.container">
    <div className="gameHeader">
      <h1>Sailor Necklace</h1>
      <p className="gameDescription">
        Here are the instructions for making a sailor necklace:<br/><br/>
        Instructions:<br/>
        1. Use only blue striped beads and solid red beads.<br/>
        2. Every sailor necklace starts by placing one striped bead and one red bead on a string.<br/>
        3. The sailor necklace can then be made longer by either:<br/><br/>
           A. Adding two striped beads to the right end of the string,<br/>
           B. Adding a red bead to each end of the string.<br/>
      </p>
    </div>
    <Sailorneck />
    <div className="gameHeader">
      <p className="gameDescription">
        These two actions can be done many times in any order to build longer and longer necklaces.<br/>
        Question:<br/>
        Which necklace below is NOT a sailor necklace?
      </p>
    </div>
    <div className="sailorRow">
      <div className="sailor" onClick={() => handleSailorClick(1)}>
        <Sailor1 />
      </div>
      <div className="sailor" onClick={() => handleSailorClick(2)}>
        <Sailor2 />
      </div>
    </div>
    <div className="sailorRow">
      <div className="sailor" onClick={() => handleSailorClick(3)}>
        <Sailor3 />
      </div>
      <div className="sailor" onClick={() => handleSailorClick(4)}>
        <Sailor4 />
      </div>
    </div>
    <div className="message">{message}</div>
  </div>
  )
};

export default SailorNecklace;
