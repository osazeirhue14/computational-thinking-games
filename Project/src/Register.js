import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import React, { useState } from 'react';
import './Login1.css';
//import { Link } from "react-router-dom";

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

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    if (!acceptedTerms) {
      alert('Please accept the terms and conditions before signing up.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Creating Account...");
        // Redirect or do something else
        window.location.href = `/games?email=${email}`;
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
    
  };
  const goToTandC = (event) => {
    window.location.href = '/TandC';
};

  return (
    <>
      <br />
      <br />
      <p id="welcome">Welcome to GamesHub! Are you ready to challenge your computational thinking skills with some of the best games available? Sign Up now to explore our diverse collection of engaging and thought-provoking games.</p>
      <div className="container">
        <form>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} />
              {' '}
              I accept the terms and conditions
            </label>
          </div>
          <button type="submit" onClick={handleLogin}>Sign Up</button>
          <br />
          <input type="reset" />
          <br />
          <br />
        </form>
        <button onClick={goToTandC}>Check Out the Signing Up Terms and Conditions</button>

      </div>
    </>
  );
}

export default Register;
