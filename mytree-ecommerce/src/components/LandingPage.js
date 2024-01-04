// LandingPage.js
import React from 'react';
import './LandingPage.css'; // Import your custom styles
import coverImage from '../assets/images/cover_image.jpg'; // Import your cover image

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Your Online Store</h1>
        <p>Discover a wide range of products</p>
      </header>

      <section className="hero-section" style={{ backgroundImage: `url(${coverImage})` }}>
        <div className="hero-content">
          <h2>Welcome to Our Online Store</h2>
          <p>Find the best deals on quality products.</p>
          <a href="/shop" className="cta-button">
            Explore Now
          </a>
        </div>
        {/* You can add a background image for the hero section */}
      </section>

      <section className="featured-products">
        <h3>Featured Products</h3>
        {/* Add featured product cards or any other content */}
      </section>

      <section className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Stay updated on the latest deals and promotions.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Online Store</p>
      </footer>
    </div>
  );
};

export default LandingPage;
