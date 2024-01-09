// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Utiliza ReactDOM.createRoot para renderizar la aplicación en el elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Utiliza React.StrictMode para activar un conjunto de comprobaciones adicionales en desarrollo
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

