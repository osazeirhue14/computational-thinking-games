import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';

const gotoPP = (event) => {
  window.location.href = '/privacypolicy';
};

const gotohome = (event) => {
  window.location.href = '/';
};

function Cookies() {
  const [cookieConsentKey, setCookieConsentKey] = useState(0);

  const handleDecline = () => {
    alert("Please Accept Cookies to Continue!");
    // Increment the key to force re-render
    setCookieConsentKey(prevKey => prevKey + 1);
  };

  const handleAccept = (acceptedByScrolling) => {
    if (acceptedByScrolling) {
      alert("Thank you for accepting our cookies by scrolling!");
    } else {
      alert("Thank you for accepting our cookies!");
    }
  };

  return (
    <>
      <center>
        <h2>Cookie Settings</h2>
        <br></br>
        <br></br>
        <b>Necessary Cookies:</b>
        <br></br>
        <p>Description: Essential for the website to function properly. These cookies are required for basic site functionalities such as authentication, session management, and security.
Purpose: Provide core website functionality.
Default: Enabled.</p>
        <br></br>
        <br></br>
        <b>Analytics Cookies:</b>
        <br></br>
        <p>Description: Used to collect information about how visitors use the website, such as the number of visitors, pages visited, and user interactions. This data helps website owners understand and analyze site performance and usage patterns.
Purpose: Analyze website traffic and performance.
Default: Disabled.</p>
        <br></br>
        <br></br>
        <b>Marketing Cookies:</b>
        <br></br>
        <p>Description: Used to track user behavior across websites to display personalized advertisements and promotions based on their interests and browsing history. These cookies may also be used to measure the effectiveness of advertising campaigns.
Purpose: Deliver targeted advertising and promotions.
Default: Disabled.</p>
        <br></br>
        <br></br>
        <b>Preferences Cookies:</b>
        <br></br>
        <p>Description: Store user preferences and settings, such as language preferences, font size, and customizations. These cookies enhance the user experience by remembering user preferences for future visits.
Purpose: Customize website settings based on user preferences.
Default: Enabled.</p>
        <br></br>
        <br></br>
        <b>Functional Cookies:</b>
        <br></br>
        <p>Description: Enhance website functionality by enabling features such as social media integration, embedded content, and interactive elements. These cookies may be set by third-party services or plugins embedded on the website.
Purpose: Enable additional website features and functionality.
Default: Enabled.</p>
      </center>
      <br></br>
      <br></br>
      <button onClick={gotohome}>Return back to HomePage</button>

      <CookieConsent
        debug={true}
        key={cookieConsentKey}
        style={{ background: "#2B373B" }}
        buttonStyle={{
          backgroundColor: "orange",
          color: "#4e503b",
          fontSize: "13px",
          borderRadius: "5px",
          padding: "10px 20px"
        }}
        declineButtonStyle={{
          backgroundColor: "#f44336",
          color: "#fff",
          fontSize: "13px",
          borderRadius: "5px",
          padding: "10px 20px"
        }}
        buttonText="I Accept"
        declineButtonText="I Decline"
        expires={150}
        enableDeclineButton
        onDecline={handleDecline}
        onAccept={handleAccept}
      >
        <big>This website uses cookies to enhance the user experience.</big>{" "}
        <span style={{ fontSize: "20px" }}>See our <Link onClick={gotoPP}>Privacy Policy</Link>for more details.</span>
      </CookieConsent>
     
    </>
  );
}

export default Cookies;

