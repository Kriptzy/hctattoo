import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-item">
          <a target="_blank" href="https://www.instagram.com/" className="footer-link">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="footer-item">
          <a target="_blank" href="https://www.facebook.com/" className="footer-link">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
      <p className="copy">Copyright &copy; 2023 HARDCORE TATTOO & BODY PIERCING</p>
    </div>
  );
}