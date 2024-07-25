import React, { useState } from "react";
import FavouriteGemPic from '../FavouriteGemPic';
import Styles from "./FavouriteGem.css";
import "./FavouriteGem.css";

const FavouriteGem = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (Ans) => {
    if (Ans === "Two") {
      setMessage(<div className="correct"><br/>Correct!</div>);
    } else {
      setMessage(<div className="incorrect"><br/>Incorrect!</div>);
    } 
  };

  return (
    <div className="Styles.container">
    <div className="gameHeader">
      <h1>Favourite Gem</h1>
      <p className="gameDescription">
      Troy has a collection of gems.<br/>
      He ranks his gems from his overall favourite to his least favourite.<br/>
      Sarah knows which gems are in Troy's collection, but she does not know how he has ranked them.<br/><br/>
      Sarah has a plan to find out which gem is Troy's overall favourite:<br/><br/>
      -Sarah chooses four of Troy's gems and asks Troy: "Out of this group of four, which gem is your favourite?"<br/>
      -Sarah chooses a new set of four gems and asks her question again.<br/>
      -Then she chooses a third set of four gems and asks her question for the last time.
      </p>
    </div>
    <FavouriteGemPic />
    <p className="gameDescription">
    <br/>Note: When Sarah chooses her second and third set of four gems, she may sometimes include gems she has chosen before.<br/><br/>
    Question:<br/><br/>
    If Sarah is to successfully find Troy's overall favourite gem, what is the largest possible number of gems in Troy's collection?<br/>
      </p>
      <br/>
    <div className="buttons">
            <button onClick={() => handleButtonClick("One")}>8</button>
            <button onClick={() => handleButtonClick("Two")}>10</button>
            <button onClick={() => handleButtonClick("Three")}>11</button>
            <button onClick={() => handleButtonClick("Four")}>12</button>
    </div>
    <div className="message">{message}</div>
  </div>
  );
};

export default FavouriteGem;
