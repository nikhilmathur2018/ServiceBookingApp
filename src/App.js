import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import LoginScreen from './Components/LoginScreen'; 
import RegistrationScreen from './Components/RegistrationScreen';
import HomePage from './Components/HomePage';
import Spinner from './Components/Spinner';
import { initializeAnimations } from './Template/Animation';
import 'animate.css';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);initializeAnimations();
    }, 2000); // Adjust this time if needed
  }, []);

  return (
    <div className="App">
      {loading ? <Spinner /> : (
        <Router>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegistrationScreen />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/" element={<LoginScreen />} /> {/* Default route */}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
