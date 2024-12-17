import React from "react";
import Navbar from "../components/navbar";

function Profile() {
  return (
    <div>
      <Navbar />
      <h1 style={styles.title}>Welcome to the Profile Page!</h1>
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

export default Profile;
