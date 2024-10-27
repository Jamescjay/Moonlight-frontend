// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursesPage from "./components/CoursesPage";
import Navbar from "./components/Navbar"; 
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const response = await fetch("http://localhost:5000/check_session");
    const data = await response.json();
    setLoggedIn(data.logged_in);
  };

  const handleLogout = async () => {
    await fetch("http://localhost:5000/logout", { method: "POST" });
    setLoggedIn(false);
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
