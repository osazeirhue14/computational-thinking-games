// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import React from 'react';
import { useState } from 'react';
import './Login1.css';


// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Logging into Account...");
        // Redirect or do something else
        window.location.href = `/games?email=${email}`;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const handleSignUp = () => {
    // Redirect to Register.js
    window.location.href=('/Register');
  };

  return (
    <>
    <br></br>
    <br></br>
    <p id="welcome">Log into GamesHub, to challenge your computational thinking skills with some of the best games available? Sign in now to explore our diverse collection of engaging and thought-provoking games. If you don't have an account yet, don't worry! You can easily sign up using the button below and start your gaming adventure today.</p>
    <div className="container">
      <form>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" onClick={handleLogin}>Sign In</button>
        <br />
        <input type="reset" />
        <br></br>
        <br></br>
      </form>
      <div>
      <p>Don't already have an account? Sign Up below!</p>
      <br></br>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
    </div>
    </>
    
  );
}

export default Login1;
