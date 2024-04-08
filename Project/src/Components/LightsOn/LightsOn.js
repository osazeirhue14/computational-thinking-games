import React from "react";
import { Link } from "react-router-dom";
import "./LightsOnMenu.css"; // Import CSS file for styling

const LightsOnMenu = () => {
  return (
    <div className="lights-on-menu">
      <h1>Lights On</h1>
      <div className="levels">
        <Link to="/LightsOnLevel1" className="level-button">Level 1</Link>
        <button className="level-button">Level 2</button>
        <button className="level-button">Level 3</button>
      </div>
    </div>
  );
};

export default LightsOnMenu;
