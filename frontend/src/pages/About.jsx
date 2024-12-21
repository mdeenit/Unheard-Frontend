import React from "react";
import Navbar from "../components/Navbar";
import tapeHome from "../assets/images/Tapehome.png"; // Correct image path
import "./About.css"; // Import the CSS file

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        {/* Text Section */}
        <div className="about-text-section">
          <h1 className="about-title">Our Story</h1>
          <p className="about-text">
            Unheard is a platform dedicated to empowering emerging music artists and
            connecting them with their fans. We believe that every artist deserves a
            chance to showcase their talent and be heard by the world. Whether you're
            an artist looking for a stage or a music enthusiast discovering new tracks,
            Unheard is the bridge that connects creativity with appreciation. Our mission
            is to create a community where independent artists can thrive, collaborate,
            and grow while providing listeners with a seamless and personalized music
            discovery experience. Join us in supporting the next generation of music talent
            and explore the sounds that are shaping the future of music. With Unheard, it's
            time to let the world hear you!
          </p>
        </div>
        
        {/* Image Section */}
        <div className="about-image-section">
          <img src={tapeHome} alt="About Us" className="about-image" />
        </div>
      </div>
    </div>
  );
}

export default About;