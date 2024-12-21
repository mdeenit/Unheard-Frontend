import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Search() {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const [artists, setArtists] = useState([]); // State for fetched artists

  const handleSearch = async () => {
    console.log("Search Query:", searchQuery); // Debugging to check the input value
    try {
      const response = await axios.get(
        `http://localhost:5100/api/music/search?query=${searchQuery}`
      );
      console.log("API Response:", response.data); // Debugging to check the API response
      setArtists(response.data); // Update the state with the received data
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Welcome to the Music Discovery Page!
      </h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for an artist..."
        style={{ margin: "20px", padding: "10px", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
        Search
      </button>

      {/* Display the fetched artists */}
      <div>
        {artists.map((artist, index) => (
          <div key={index} style={{ margin: "20px 0" }}>
            <h3>{artist.name}</h3>
            <p>{artist.genres.join(", ")}</p>
            <a href={artist.profileUrl} target="_blank" rel="noopener noreferrer">
              Visit Spotify Profile
            </a>
            {artist.image && <img src={artist.image} alt={artist.name} style={{ width: "100px" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
