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
import LightsOnLevel1 from "./Components/LightsOn/LightsOnLevel1";
import AboutUs from "./Components/AboutUs/AboutUs";
import Reviews from "./Components/Reviews/Reviews";
import Login from "./Login1";

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
      <Route path="/LightsOn" element={<LightsOn />} />
      <Route
        path="/LightsOnLevel1"
        element={
          <>
            <NavBar />
            <LightsOnLevel1 />
            <Footer />
          </>
        }
      />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
};

export default Nav;
