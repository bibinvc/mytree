// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ContactUs from './pages/ContactUs';  // Import the ContactUs page

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
          <Route path="/contact" element={<ContactUs />} />  {/* Add the ContactUs route */}
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
