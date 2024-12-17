import React from "react";
import Navbar from "../components/Navbar";
import tapeHome from "../assets/images/Tapehome.png"; // Correct image path

function About() {
  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        {/* Text Section */}
        <div style={styles.textSection}>
          <h1 style={styles.title}>Our Story</h1>
          <p style={styles.aboutText}>
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
        <div style={styles.imageSection}>
          <img src={tapeHome} alt="About Us" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex", // Flexbox for horizontal alignment
    flexDirection: "row", // Ensures horizontal layout
    justifyContent: "space-between", // Spacing between text and image
    alignItems: "center", // Align content vertically centered
    margin: "50px auto",
    maxWidth: "1200px", // Restrict the width of the container
    padding: "20px",
  },
  textSection: {
    flex: 1, // Allows text section to grow proportionally
    paddingRight: "20px", // Adds space between text and image
  },
  title: {
    fontSize: "32px",
    color: "#333",
    marginBottom: "50px",
    textAlign: "center",
  },
  aboutText: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#555",
    textAlign: "center",
  },
  imageSection: {
    flex: 1, // Allows image section to grow proportionally
    display: "flex",
    justifyContent: "flex-end", // Pushes image towards the right edge
    alignItems: "center",
    marginLeft: "70px", // Add extra spacing to move the image further right
  },
  
  image: {
    maxWidth: "100%", // Responsive image
    height: "auto",
    borderRadius: "10px", // Optional: rounded corners
    
  },
};

export default About;
