import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import BeaverPic from "../../Assets/BeaverPic.png";


const Games = () => {
  const workInfoData = [
    {
      image: BeaverPic,
      title: "TicTacToe",
    },
    {
      image: BeaverPic,
      title: "Lights On",
    },
    {
      image: BeaverPic,
      title: "Game 2",
      text: "Description",
    },
    {
      image: BeaverPic,
      title: "Game 3",
      text: "Description",
    },
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
