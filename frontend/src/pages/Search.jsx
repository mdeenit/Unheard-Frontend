import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./Search.css";

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [artists, setArtists] = useState([]); // State for fetched artists
  const [error, setError] = useState(""); // State for error messages

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError("Please enter an artist name.");
      return;
    }

    setError(""); // Clear previous errors
    try {
      const response = await axios.get(
        `http://localhost:5100/api/music/search?query=${searchQuery}`
      );
      setArtists(response.data); // Update the state with the received data
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch artist data. Please try again later.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-page">
      <Navbar />
      <div className="search-container">
        <h1 className="search-title">Music Discovery</h1>
        <p className="search-subtitle">Find your favorite artists and songs.</p>
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter artist name..."
            className="search-input"
            onKeyDown={handleKeyDown} // Added key listener
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="artist-results">
          {artists.map((artist, index) => (
            <div key={index} className="artist-card">
              {artist.image && (
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="artist-image"
                />
              )}
              <h3 className="artist-name">{artist.name}</h3>
              <p className="artist-genres">
                {artist.genres.length > 0 ? artist.genres.join(", ") : "N/A"}
              </p>
              <a
                href={artist.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="artist-link"
              >
                Visit Spotify Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;