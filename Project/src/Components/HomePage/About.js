import React from "react";
import AboutBackground from "../../Assets/about-background.png";
import BannerImage from "../../Assets/home-banner-image.png";

const About = () => {
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
          Computational thinking games help students improve their logical thinking ability.
        </p>
        <p className="primary-text">
          GameHub was created to help students.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;