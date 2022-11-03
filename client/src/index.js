import React from 'react';
import ReactDOM from 'react-dom';   // import ReactDOM from 'react-dom/client'?
import './index.css';
import App from './App';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root')
);

serviceWorkerRegistration.register();

reportWebVitals();
