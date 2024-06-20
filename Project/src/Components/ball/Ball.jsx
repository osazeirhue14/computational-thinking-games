/* eslint-disable */
import React from "react";
import RedBall from "../../Assets/counter-red-large.svg";
import SmallRedBall from "../../Assets/counter-red-small.svg";
import YellowBall from "../../Assets/counter-yellow-large.svg";
import SmallYellowBall from "../../Assets//counter-yellow-small.svg";
import { useState, useEffect } from "react";

const Ball = ({ turn, isScreenSmall }) => {
  const [color, setColor] = useState(turn);

  useEffect(() => {
    setColor(turn);
  }, []);

  return !color ? (
    <img src={isScreenSmall ? SmallRedBall : RedBall} alt="redBall" />
  ) : (
    <img src={isScreenSmall ? SmallYellowBall : YellowBall} alt="yellowBall" />
  );
};

export default Ball;
