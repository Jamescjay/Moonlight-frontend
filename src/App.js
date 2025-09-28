// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursesPage from "./components/CoursesPage";
import Navbar from "./components/Navbar"; 
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const response = await fetch("http://localhost:5000/check_session");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setLoggedIn(data.logged_in);
    } catch (error) {
      console.log("Backend server is not running or not accessible:", error.message);
      // Set loggedIn to false as fallback when backend is not available
      setLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/logout", { 
        method: "POST",
        credentials: 'include' // Include cookies if using session-based auth
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      setLoggedIn(false);
    } catch (error) {
      console.log("Logout failed:", error.message);
      // Still set loggedIn to false even if logout request fails
      setLoggedIn(false);
    }
  };

  return (
    <Router>
      <Navbar
        loggedIn={loggedIn}
        handleLogout={handleLogout}
        setLoggedIn={setLoggedIn}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;