import React from "react";
import "../styles/Footer.css"; // Import the CSS file for styling
import { Facebook, Instagram, LinkedIn, Twitter } from "./Icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <a href="/">
            <h2>🌕Moonlight</h2>
          </a>
          <p>Ngong Road P.O. Box: 1896-20117 Nairobi, Kenya</p>
          <div className="icons">
            <a href="#facebook">
              <Facebook />
            </a>
            <a href="#twitter">
              <Twitter />
            </a>
            <a href="#instagram">
              <Instagram />
            </a>
            <a href="#linkedin">
              <LinkedIn />
            </a>
          </div>
        </div>

        <div className="quick-links">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="useful-links">
          <h5>Useful Links</h5>
          <ul>
            <li>
              <a href="/contact">Help Desk</a>
            </li>
            <li>
              <a href="/contact">FAQs</a>
            </li>
            <li>
              <a href="/contact">Send Feedback</a>
            </li>
            <li>
              <a href="/about">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="newsletter">
          <h5>Newsletter</h5>
          <p>Subscribe to our newsletter.</p>
          <label htmlFor="email">Enter your Email:</label>
          <input type="email" id="email" placeholder="Your Email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      <div className="footer-divider" />
      <p className="footer-rights">All rights reserved.</p>
    </footer>
  );
}

export default Footer;
