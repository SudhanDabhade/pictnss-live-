/**
 * index.js - Application Entry Point
 * Renders the App component and imports global styles
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import './styles/animations.css';
import App from './App';

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
