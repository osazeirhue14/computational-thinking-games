// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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