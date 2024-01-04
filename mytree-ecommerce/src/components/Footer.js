// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2>About Us</h2>
          <p>Your trusted source for eco-friendly products inspired by nature.</p>
        </div>
        <div className="footer-column">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Contact Us</h2>
          <p>Email: info@mytree.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="footer-column">
          <h2>Subscribe to Our Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MyTree. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
