import React from "react";
import "../styles/Footer.css";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-info">
          <a href="/" className="brand-link">
            <h2>🌕Moonlight</h2>
          </a>
          <p className="address">Ngong Road P.O. Box: 1896-20117 Nairobi, Kenya</p>
          <div className="footer-social-icons">
            <a href="#facebook" className="footer-social-link" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#twitter" className="footer-social-link" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#instagram" className="footer-social-link" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#linkedin" className="footer-social-link" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="footer-section quick-links">
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

        <div className="footer-section useful-links">
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

        <div className="footer-section newsletter">
          <h5>Newsletter</h5>
          <p className="newsletter-description">Subscribe to our newsletter for updates.</p>
          <div className="newsletter-form">
            <label htmlFor="email" className="email-label">Enter your Email:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              className="email-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-divider" />
      <p className="footer-rights">© 2024 Moonlight. All rights reserved.</p>
    </footer>
  );
}

export default Footer;