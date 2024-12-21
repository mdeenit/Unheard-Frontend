import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing external CSS file for styling

// Navbar Component: Renders the navigation bar with logo, links, and buttons

function Navbar() {

  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // Add/remove class to body
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="logo-image"
        />
      {/* Make UNHEARD clickable and navigate to the home page */}
        <Link to="/home">
        <span className="unheard">UNHEARD</span>
        </Link>
      </div>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/playlist">Playlist</Link>
      </div>
      <div className="buttons">
        <Link to="/"><button className="signup-button">Sign Up</button></Link>
        <Link to="/login"><button className="login-button">Login</button>
        </Link>
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
