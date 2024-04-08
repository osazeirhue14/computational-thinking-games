import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import About from "./Components/HomePage/About";
import Games from "./Components/HomePage/Games";
import Testimonial from "./Components/HomePage/Testimonial";
import Contact from "./Components/HomePage/Contact";
import Footer from "./Components/HomePage/Footer";
import LightsOn from "./Components/LightsOn/LightsOn"; 

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
      <Route path="/about" element={<About />} />
      <Route path="/games" element={<Games />} />
      <Route path="/LightsOn" element={<LightsOn />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Nav;
