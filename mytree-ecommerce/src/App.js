// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ContactUs from './pages/ContactUs';
import Shop from './pages/Shop';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Career from './pages/Career'; // Import the Career page

function App() {
  const globalStyles = {
    fontFamily: 'sans-serif',
  };

  return (
    <Router>
      <div style={globalStyles}>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/career" element={<Career />} /> {/* Add the Career route */}
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
