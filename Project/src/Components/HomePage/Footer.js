import React from "react";
import Logo from "../../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
//import TandC from "../../TandC";
const goToTandC = (event) => {
  window.location.href = '/TandC';
};
const goToPrivacyPolicy = (event) => {
  window.location.href = '/PrivacyPolicy';
};
const goToAbout = (event) => {
  window.location.href = '/about-us';
};
const goToReviews = (event) => {
  window.location.href = '/Reviews';
};
const goToUserGuidelines = (event) => {
  window.location.href = '/UserGuidelines';
};
const goToAcceptingCookies = (event) => {
  window.location.href = '/cookies';
};

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>
          <Link onClick={goToAbout} to="TandC">About Us</Link>
            </span>
          <span>
          <Link onClick={goToUserGuidelines} to="TandC">User Guidelines</Link>
            </span>
          <span>
          <Link onClick={goToTandC} to="TandC">Accessibility</Link>
            </span>
          <span>
          <Link onClick={goToReviews} to="TandC">Testimonials</Link>
            </span>
          <span>
          <Link onClick={goToAcceptingCookies} to="TandC">Cookie settings</Link>
            </span>
        </div>
        <div className="footer-section-columns">
          <span>
            <a href="mailto:GameHub@game.com"  target="_blank" rel="noopener noreferrer">GameHub@game.com</a>
          </span>
          <span>
          <a href="mailto:iqda@mu.ie"  target="_blank" rel="noopener noreferrer">iqda@mu.ie</a>
            </span>
          <span>
          <a href="mailto:Maintenance@mu.ie"  target="_blank" rel="noopener noreferrer">Maintenance@mu.ie</a>
            </span>
        </div>
        <div className="footer-section-columns">
        <span>
          <Link onClick={goToTandC} to="TandC">Terms and Conditions</Link>
        </span>
          <span>
          <Link onClick={goToPrivacyPolicy} to="Privacypolicy">Privacy Policy</Link>
            </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;