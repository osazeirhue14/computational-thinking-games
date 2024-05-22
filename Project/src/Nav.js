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
import LightsOnLevel2 from "./Components/LightsOn/LightsOnLevel2";
import LightsOnLevel3 from "./Components/LightsOn/LightsOnLevel3";
import AboutUs from "./Components/AboutUs/AboutUs";
import Reviews from "./Components/Reviews/Reviews";
import Login from "./Login1";
import Register from "./Register";
import TandC from "./TandC";
import LeaveReview from "./Components/Reviews/LeaveReview";
import StarRate from "./Components/Reviews/starRate";
import PrivacyPolicy from "./PrivacyPolicy";
import UserGuidelines from "./UserGuidelines";
import AcceptingCookies from "./AcceptingCookies";
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
      <Route
        path="/LightsOnLevel2"
        element={
          <>
            <NavBar />
            <LightsOnLevel2 />
            <Footer />
          </>
        }
      />
      <Route
        path="/LightsOnLevel3"
        element={
          <>
            <NavBar />
            <LightsOnLevel3 />
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
<Route path="AcceptingCookies" element={<AcceptingCookies/>}/>

    </Routes>
  );
};

export default Nav;
