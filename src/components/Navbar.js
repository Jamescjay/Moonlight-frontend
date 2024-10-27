// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { Person } from "./Icons";
import LoginModal from "./LoginModal";

function Navbar({ loggedIn, handleLogout, setLoggedIn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">🌕 Moonlight</Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          {!loggedIn ? (
            <div className="navbar-icon" onClick={() => setIsModalOpen(true)}>
              <Person />
            </div>
          ) : (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>
      {isModalOpen && (
        <LoginModal
          setLoggedIn={setLoggedIn}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
