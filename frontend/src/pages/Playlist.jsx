import React from "react";
import Navbar from "../components/Navbar";
import "./Playlist.css";

// Import the image from the src/assets/images directory
import TopHitsImage from "../assets/images/TopHits.png";
import Chillvibes from "../assets/images/chillvibe.png";
import workout from "../assets/images/workout.png";

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
      image: Chillvibes,
    },
    {
      id: 3,
      name: "Workout Boost",
      description: "High-energy tracks to power your workout.",
      image: workout,
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
            {/* Add a button for each playlist */}
            <button
              className="playlist-button"
              onClick={() => alert(`You selected ${playlist.name}`)}
            >
              View {playlist.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;