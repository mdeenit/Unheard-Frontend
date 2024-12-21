import React from "react";
import Navbar from "../components/Navbar";
import "./Playlist.css";

// Import the image from the src/assets/images directory
import TopHitsImage from "../assets/images/TopHits.png";

function Playlist() {
  const playlists = [
    {
      id: 1,
      name: "Top Hits",
      description: "The best tracks right now.",
      image: TopHitsImage, // Use the imported image
    },
    {
      id: 2,
      name: "Chill Vibes",
      description: "Relax and unwind with these mellow tunes.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Workout Boost",
      description: "High-energy tracks to power your workout.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="playlist-page">
      <Navbar />
      <div className="playlist-header">
        <h1>Your Playlists</h1>
        <p>Explore and enjoy curated collections of music tailored for you!</p>
      </div>
      <div className="playlist-container">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <img
              src={playlist.image}
              alt={playlist.name}
              className="playlist-image"
            />
            <h3 className="playlist-title">{playlist.name}</h3>
            <p className="playlist-description">{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;