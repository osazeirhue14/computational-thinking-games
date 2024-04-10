import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import BannerImage from "../../Assets/home-banner-image.png";

const AboutUs = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={BannerImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">
          Gamehub games are beneficial to students 
        </h1>
        <p className="primary-text">
        GameHub is your ultimate destination for immersive gaming experiences and exhilarating competitions. As passionate gamers ourselves, we've created a platform that merges the excitement of gaming with the thrill of competition, all within a vibrant community-driven environment.
        </p>
        <h1 className="primary-heading">
          Who Are We?
        </h1>
        <p className="primary-text">
        At GameHub, we're dedicated to fostering a gaming community where players of all levels and interests can come together to share their passion for gaming. Whether you're a casual player looking for some fun or a competitive gamer seeking intense challenges, GameHub is the place for you.
        </p>
        <h1 className="primary-heading">
          Our Vision
        </h1>
        <p className="primary-text">
        Our vision at GameHub is to be the go-to destination for gamers worldwide, providing a diverse range of games and competitions that cater to every taste and skill level. We aim to create an inclusive and welcoming space where gamers can connect, compete, and celebrate their love for gaming.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;