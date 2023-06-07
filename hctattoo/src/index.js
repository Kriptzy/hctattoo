import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './css/home.css';
import './css/about.css';
import './css/contact.css';
import './css/navbar.css';
import './css/footer.css';
import './css/gallery.css';
import './css/news.css';
import './css/notfound.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);