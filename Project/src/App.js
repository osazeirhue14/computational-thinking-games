import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
const gotoPP = (event) => {
  window.location.href = '/privacypolicy';
};




function App() {
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
    <Router>
      <div className="App">
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
        <Nav />
      </div>
    </Router>
  );
}


export default App;



