import React from 'react'
import BannerBackground from "../../Assets/home-banner-background.png";
import "./Login.css";


import { useState } from 'react'
//import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/home-banner-image.png";
//import Navbar from "./Navbar";
import Logo from "../../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";





function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    // For simplicity, let's just check if username and password are not empty
    if (username !== '' && password !== '') {
      // You can implement actual authentication logic here
      setLoggedIn(true);
    } else {
      alert('Please enter username and password');
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };


  return (
    <>
    
    <p className="welcome">
    Welcome to GameHub! Get ready to embark on exciting adventures and challenges. To access our vast collection of games, simply log in using your credentials. Once logged in, you'll unlock a world of entertainment and fun waiting for you. Let the gaming journey begin! Log into our games page now and let the fun begin!"
    </p>
    <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div> <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>

      <div>
      {loggedIn ? (
        <div className="Welcome">
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
    <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
    </>
  )
}


export default Login


