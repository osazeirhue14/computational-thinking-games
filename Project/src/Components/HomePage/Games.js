import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BeaverPic from "../../Assets/BeaverPic.png";
import TicTacToe from "../../Assets/TicTacToePic.png";
import Heart from "../../Assets/HeartPic.png";
import Connect from "../../Assets/ConnectFour.png";
import Math from "../../Assets/Calculator.png";
import Abacus from "../../Assets/abacus.png";
import Sailor from "../../Assets/SailorPic.png";
import Beaver from "../../Assets/BeaverPic2.png";
import NutsAndBolts from "../../Assets/NutsAndBolts.png";
import sewingmachine from "../../Assets/sewingmachine.png";
import encryption from "../../Assets/encryption.png";



const Games = () => {
  const workInfoData = [
    {
      image: TicTacToe,
      title: "TicTacToe",
    },
    {
      image: Beaver,
      title: "Lights On",
    },
    {
      image: Connect,
      title: "Connect Four",
      
    },
    {
      image: Abacus,
      title: "Miss Infinity",
      
    },
    {
      image: Sailor,
      title: "Sailor Necklace",
      
    },
    {
      image: Math,
      title: "Lists",
      
    },
    {
      image: Heart,
      title: "Heart Graphics",
      
    },
    {
      image: NutsAndBolts,
      title: "Nuts and Bolts",
      
    },
    {
      image: sewingmachine,
      title: "Sewing Machine",
      
    },
    {
      image: encryption,
      title: "Cipher 8",
      
    },
    {
      image: BeaverPic,
      title: "hi",
      
    }
  ];
  const queryParams = new URLSearchParams(window.location.search);
  const email = queryParams.get('email');

  return (
    
    <div className="work-section-wrapper">
      <center><h1>Hello, {email}!</h1></center>
      <br></br>
      <div className="work-section-top">
        <p className="primary-subheading">Games</p>
        <h1 className="primary-heading">Our Games</h1>
        <p className="primary-text">
          Choose from a variety of computational thinking games!
        </p>
        <p className="primary-text">
          Try a classic game of TicTacToe with a friend as a warmup before going into some more challenging games!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            {/* Replace button with Link */}
            <Link to={`/${data.title.split(" ").join("")}`} className="secondary-button">Play</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
