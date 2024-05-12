import React from 'react'
import BannerBackground from "../../Assets/home-banner-background.png";
//import "./Login.css";


import { useState } from 'react'
//import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/home-banner-image.png";
//import Navbar from "./Navbar";
import Logo from "../../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword }  from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyCkSYy4F0LhEfVlUnQ7zY0cftTARaiefhc",
  authDomain: "team-3-project-72aca.firebaseapp.com",
  databaseURL: "https://team-3-project-72aca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "team-3-project-72aca",
  storageBucket: "team-3-project-72aca.appspot.com",
  messagingSenderId: "547075046815",
  appId: "1:547075046815:web:990b86e5f663c2604011aa",
  measurementId: "G-23KFB5KCHN"
};
///
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();

function Login() {
   
  

  const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
    event.preventDefault()
    const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Logging into Account...")
      window.location.href="App.js";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
    
  

})



  return (
    <>
    
    <form>
                <h2>Sign In</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Sign In</button>
                <br />
                <input type="reset" />
            </form>
    </>
  )
}


export default Login


