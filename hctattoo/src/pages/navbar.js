import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const mobileCheck = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    mobileCheck();
    window.addEventListener('resize', mobileCheck);

    return () => {
      window.removeEventListener('resize', mobileCheck);
    };
  }, []);

  useEffect(() => {
    // Check if the user has scrolled
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    // Toggle the mobile menu
  };

  return (
    <div>
      <div className={`navbar${isScrolled ? ' scrolled' : ''}`}>
        <div className="logo">Hardcore Tattoo & Body Piercing</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Inicio
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/sobre" className="nav-link">
              Sobre
              <i className="fas fa-info-circle"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/galeria" className="nav-link">
              Galeria
              <i className="fas fa-image"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/noticias" className="nav-link">
              Noticias
              <i className="fas fa-newspaper"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/contactos" className="nav-link">
              Contactos
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
        {isMobile && !isScrolled && (
          <i className="fas fa-bars icon" onClick={toggleMenu}></i>
        )}
      </div>
    </div>
  );
}
