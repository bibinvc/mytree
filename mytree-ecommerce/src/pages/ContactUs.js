// pages/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
      <h2>Contact Us</h2>
      <p>
        We'd love to hear from you! If you have any questions, feedback, or inquiries,
        please feel free to contact us using the form below or through our provided contact details.
      </p>

      {/* Contact Form */}
      <form style={{ maxWidth: '400px', margin: 'auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Your Name:</label>
          <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Your Email:</label>
          <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Your Message:</label>
          <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px' }} required></textarea>
        </div>

        <button type="submit" style={{ background: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}>Submit</button>
      </form>

      {/* Contact Details */}
      <div style={{ marginTop: '40px' }}>
        <h3>Contact Details</h3>
        <p>Email: <a href="mailto:info@ourstore.com">info@ourstore.com</a></p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Main Street, Cityville, State, 12345</p>
      </div>
    </div>
  );
};

export default ContactUs;
