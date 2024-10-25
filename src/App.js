import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CoursesPage from "./components/CoursesPage";
import FAQPage from "./components/FAQPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar"; // Import Navbar

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
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
