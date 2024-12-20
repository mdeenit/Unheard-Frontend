import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage.jsx';
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';
import Playlist from './pages/Playlist.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/playlist" element={<Playlist />} /> 
        <Route path="/login" element={<Login />} /> 

      </Routes>
    </Router>
  );
}

export default App;

