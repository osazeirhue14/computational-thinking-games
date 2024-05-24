import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import CookieConsent from 'react-cookie-consent';
//import { Link } from 'react-router-dom';

//const gotoPP = () => {
 // window.location.href = '/PrivacyPolicy';
//};

function App() {


  
  return (
    <Router>
      <div className="App">
      <CookieConsent
  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
        <Nav />
      </div>
    </Router>
  );
}

export default App;

