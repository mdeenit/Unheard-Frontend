import React from "react";
import Navbar from "../components/Navbar";
import "./HomePage.css";

// Import images directly
import musicIcon from "../assets/images/music.png";


function HomePage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="options-section">
        <h1 className="homepage-title">Pick an option below</h1>
        <div className="options">
          <div className="option">
            <img src={musicIcon} alt="Music Search" />
            <p>Music Search and Discovery</p>
          </div>
          <div className="option">
            <p>Create Artist Profile</p>
          </div>
          <div className="option">
            <p>Playlist Management</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
