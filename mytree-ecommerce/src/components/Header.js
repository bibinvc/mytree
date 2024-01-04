// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">MyTree</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
      <div className="user-actions">
        <Link to="/login" className="login-button">
          Login
        </Link>
        <Link to="/signup" className="signup-button">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
