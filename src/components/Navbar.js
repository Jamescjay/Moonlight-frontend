import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { Person } from "./Icons";
import LoginModal from "./LoginModal";

function Navbar({ loggedIn, handleLogout, setLoggedIn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">🌕 Moonlight</Link>
        </div>
        <div
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          id="navbar-links"
          className={`navbar-links ${isMenuOpen ? "active" : ""}`}
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/courses" onClick={() => setIsMenuOpen(false)}>
            Courses
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
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
