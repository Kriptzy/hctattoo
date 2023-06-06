import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-item">
          <a target="_blank" href="https://www.instagram.com/haider_hctattoos/" className="footer-link">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="footer-item">
          <a target="_blank" href="https://www.facebook.com/HARDCORE.TATTOOS.BODYPIERCING/?locale=pt_PT" className="footer-link">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
      <p className="copy">Copyright &copy; 2023 HARDCORE TATTOO & BODY PIERCING</p>
    </div>
  );
}