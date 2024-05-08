// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React from 'react'
import { useState } from 'react'
import './App.css'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);



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
    <p>
    Welcome to GameHub! Get ready to embark on exciting adventures and challenges. To access our vast collection of games, simply log in using your credentials. Once logged in, you'll unlock a world of entertainment and fun waiting for you. Let the gaming journey begin! Log into our games page now and let the fun begin!"
    </p>
      <div>
      {loggedIn ? (
        <div>
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
    </>
  )
}


export default Login

