import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../components/Navbar";
import "./HomePage.css";

// Import images directly
import musicIcon from "../assets/images/music.png";
import add from "../assets/images/add.png";
import playlist from "../assets/images/playlist.png";

function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const options = [
    {
      id: 1,
      image: musicIcon,
      title: "Music Search and Discovery",
      description: "Find and explore new artists and songs.",
      onClick: () => navigate("/search"), // Navigate to Search page
    },
    {
      id: 2,
      image: add,
      title: "Create Artist Profile",
      description: "Join our community and showcase your talent.",
      onClick: () => navigate("/"), // Navigate to Sign Up page
    },
    {
      id: 3,
      image: playlist,
      title: "Playlist Management",
      description: "Manage and curate your playlists.",
      onClick: () => navigate("/playlist"), // Navigate to Playlist page
    },
  ];

  return (
    <div className="homepage-container">
      <Navbar />
      <div className="homepage-content">
        <h1 className="homepage-title">Discover Music Your Way</h1>
        <p className="homepage-subtitle">Pick an option below to get started:</p>
        <div className="options-grid">
          {options.map((option) => (
            <div
              key={option.id}
              className="option-card"
              onClick={option.onClick} // Handle navigation onClick
            >
              <img
                src={option.image}
                alt={option.title}
                className="option-image"
              />
              <h3 className="option-title">{option.title}</h3>
              <p className="option-description">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;