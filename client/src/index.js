import React from 'react';
import ReactDOM from 'react-dom';   // import ReactDOM from 'react-dom/client'?
import './index.css';
import App from './App';

import { Workbox } from 'workbox-window'; // for PWA

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/service-worker.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
