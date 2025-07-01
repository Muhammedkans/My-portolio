import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // ✅ Must be imported

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* ✅ Wrap your App here */}
    </BrowserRouter>
  </React.StrictMode>
);
