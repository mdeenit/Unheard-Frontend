import React from "react";
import Navbar from "../components/navbar";

function Playlist() {
  return (
    <div>
      <Navbar />
      <h1 style={styles.title}>Welcome to the Playlist page!</h1>
    </div>
  );
}

const styles = {
  title: {
    fontSize: "24px",
    textAlign: "center",
    marginTop: "50px",
    color: "#333",
  },
};

export default Playlist;
