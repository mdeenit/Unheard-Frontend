import React from 'react';
import Navbar from '../components/navbar';

function Login() {
  return (

    
    <div style={styles.container}>
      <Navbar />
      <div style={styles.signupForm}>
        <h1 style={styles.title}>UNHEARD</h1>
        <form>

          <label style={styles.label}>Email:</label>
          <input type="email" placeholder="example@gmail.com" style={styles.input} />

          <label style={styles.label}>Password:</label>
          <input type="password" placeholder="enter..." style={styles.input} />

          <button type="submit" style={styles.submitButton}>
            Sign In
          </button>



        </form>
      </div>
    </div>
  );
}


const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  signupForm: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '32px',
    color: '#e74c3c',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    margin: '10px 0 5px',
    textAlign: 'left',
  },
  input: {
    width: '90%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    border: '1px solid #ccc',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '30px auto'
  },
};

export default Login;
