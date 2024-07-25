import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/HomePage/Navbar";
import Home from "./Components/HomePage/Home";
import About from "./Components/HomePage/About";
import Games from "./Components/HomePage/Games";
import Testimonial from "./Components/HomePage/Testimonial";
import Contact from "./Components/HomePage/Contact";
import Footer from "./Components/HomePage/Footer";
import LightsOn from "./Components/LightsOn/LightsOn"; 
import AboutUs from "./Components/AboutUs/AboutUs";
import Reviews from "./Components/Reviews/Reviews";
import Login from "./Login1";
import Register from "./Register";
import TandC from "./TandC";
import LeaveReview from "./Components/Reviews/LeaveReview";
import StarRate from "./Components/Reviews/starRate";
import PrivacyPolicy from "./PrivacyPolicy";
import UserGuidelines from "./UserGuidelines";
import Cookies from "./cookies";
import TicTacToe from "./Components/LightsOn/TicTacToe";
import ConnectFour from "./Components/LightsOn/InGame";
import MissInfinity from "./Components/LightsOn/MissInfinity";
import Lists from "./Components/LightsOn/Lists";
import SailorNecklace from "./Components/SailorNecklace/SailorNecklace";
import HeartGraphics from "./Components/HeartGraphics/HeartGraphics";
import Maze from "./Components/LightsOn/Maze";
import NutsandBolts from "./Components/NutsandBolts/NutsandBolts";
import SewingMachine from "./Components/SewingMachine/SewingMachine";
import Cipher8 from "./Components/Cipher8/Cipher8";
import FavouriteGem from "./Components/FavouriteGem/FavouriteGem";
const Nav = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <About />
            <Games />
            <Testimonial />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route
        path="/about-us"
        element={
          <>
            <NavBar />
            <AboutUs />
            <Footer />
          </>
        }
      />
      <Route
        path="/reviews"
        element={
          <>
            <NavBar />
            <Reviews />
            <Footer />
          </>
        }
      />
      <Route
        path="/games"
        element={
          <>
            <NavBar />
            <Games />
            <Footer />
          </>
        }
      />
      <Route path="/LightsOn" element={
      <>
      <NavBar />
      <LightsOn/>
      <Footer />
    </>
      } 
      />
      
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register/>}/>
      <Route path="TandC" element={<TandC/>}/>
      <Route path="LeaveReview" element={<LeaveReview/>}/>
      <Route path="starRate" element={<StarRate/>}/>
      <Route path="PrivacyPolicy" element={<PrivacyPolicy/>}/>
      <Route path="UserGuidelines" element={<UserGuidelines/>}/>
      <Route path="TicTacToe" element={
      <>
      <TicTacToe/>
      <Footer />
    </>}/>
    <Route path="ConnectFour" element={
      <>
      <NavBar />
      <ConnectFour/>
      <Footer />
    </>}/>
      <Route path="MissInfinity" element={
      <>
      <NavBar />
      <MissInfinity/>
      <Footer />
    </>}/>
    <Route path="Maze" element={
      <>
      <NavBar />
      <Maze/>
      <Footer />
    </>}/>
      <Route path="Lists" element={
      <>
      <NavBar />
      <Lists/>
      <Footer />
    </>}/>
    <Route path="SailorNecklace" element={
      <>
      <NavBar />
      <SailorNecklace/>
      <Footer />
    </>}/>
    <Route path="HeartGraphics" element={
      <>
      <NavBar />
      <HeartGraphics/>
      <Footer />
    </>}/>
    <Route path="NutsandBolts" element={
      <>
      <NavBar />
      <NutsandBolts/>
      <Footer />
    </>}/>
    <Route path="SewingMachine" element={
      <>
      <NavBar />
      <SewingMachine/>
      <Footer />
    </>}/>
    <Route path="Cipher8" element={
      <>
      <NavBar />
      <Cipher8/>
      <Footer />
    </>}/>
    <Route path="FavouriteGem" element={
      <>
      <NavBar />
      <FavouriteGem/>
      <Footer />
    </>}/>
<Route path="cookies" element={<Cookies/>}/>

    </Routes>
  );
};

export default Nav;
