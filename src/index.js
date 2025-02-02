import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import jQuery and WOW.js
import $ from 'jquery';
import WOW from 'wow.js';

// Initialize WOW.js
new WOW().init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
