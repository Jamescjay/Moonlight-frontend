// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ loggedIn, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Moonlight</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About Us</Link>
        {!loggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
