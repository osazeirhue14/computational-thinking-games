import React from "react";
import { Link } from "react-router-dom";
import "./LightsOnMenu.css";

const LightsOnMenu = () => {
  return (
    <div className="lights-on-menu">
      <h1>Lights On</h1>
      <div className="levels">
        <Link to="/LightsOnLevel1" className="level-button1">Level 1</Link>
        <Link to="/LightsOnLevel2" className="level-button2">Level 2</Link>
        <Link to="/LightsOnLevel3" className="level-button3">Level 3</Link>
      </div>
    </div>
  );
};

export default LightsOnMenu;
