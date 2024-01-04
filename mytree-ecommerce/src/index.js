// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // Import your main styles file
import './styles/Header.css'; // Import header styles
import './styles/Footer.css'; // Import footer styles
import './styles/Cart.css'; // Import cart styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
