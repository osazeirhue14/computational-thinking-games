import React, { useState } from "react";
import NutsandBoltsMain from '../NutsandBoltsMain';
import NutsandBolts2 from '../NutsandBolts2';
import NutsandBolts3 from '../NutsandBolts3';
import NutsandBolts4 from '../NutsandBolts4';
import NutsandBolts1 from '../NutsandBolts1';
import Styles from "./NutsandBolts.css";
import "./NutsandBolts.css";


const NutsandBolts = () => {
    const [message, setMessage] = useState("");

    const handleNutsandBoltsClick = (NutsorBolts) => {
        if (NutsorBolts === 3) {
          setMessage(<div className="correct">Correct!</div>);
        } else {
          setMessage(<div className="incorrect">Incorrect!</div>);
        }
    }

  return(
  <div className="Styles.container">
    <div className="gameHeader">
      <h1>Nuts and Bolts</h1>
      <p className="gameDescription">
      At the Beaver Construction factory, Benoit works at the nut and bolt assembly line.
      </p>
    </div>
    <NutsandBoltsMain />
    <div className="gameHeader">
      <p className="gameDescription">
      <br/>His job description is as follows:<br/>
        -Stand at one end of a conveyor belt, which brings a line of nuts and bolts.<br/>
        -Take each element, either a nut or a bolt, off the conveyor belt as they arrive.<br/>
        -Put the nuts from the conveyor belt in the red bucket.<br/>
        -Attach any bolt, taken from the conveyor belt, to a nut from the red bucket and place the assembled part onto the table behind you.<br/><br/>
        However, things can go wrong for Benoit in two different ways:<br/>
        1. When Benoit takes a bolt from the conveyor belt there may not be a nut in the bucket.<br/>
        2. There may be no more nuts or bolts on the conveyor belt but there are still nuts in the bucket.<br/><br/>
        Question:<br/>
        Which sequence of nuts and bolts, when processed from left-to-right, will not cause things to go wrong for Benoit?<br/>
      </p>
    </div>
    <div className="sailorRow">
      <div className="sailor" onClick={() => handleNutsandBoltsClick(1)}>
        <NutsandBolts1 />
      </div>
      <div className="sailor" onClick={() => handleNutsandBoltsClick(2)}>
        <NutsandBolts2 />
      </div>
    </div>
    <div className="sailorRow">
      <div className="sailor" onClick={() => handleNutsandBoltsClick(3)}>
        <NutsandBolts3 />
      </div>
      <div className="sailor" onClick={() => handleNutsandBoltsClick(4)}>
        <NutsandBolts4 />
      </div>
    </div>
    <div className="message">{message}</div>
  </div>
  )
};

export default NutsandBolts;
