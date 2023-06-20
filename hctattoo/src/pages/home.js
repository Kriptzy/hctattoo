import React from 'react';
import shopImage from '../img/shop.jpg';

export default function Home() {
  return (
    <div>
    <div className="home-container">
      <div className="home-image-container">
        <div className="background-home"></div>
        <div className="home-title-container">
          <div className="home-title">Inicio</div>
        </div>
      </div>
    </div>
    <div className="home-text-container">
      <div className="home-text">Bem-vindo ao Hardcore Tattoo & Body Piercing</div>
      <img src={shopImage} className="home-image" alt="shop" />
    </div>
    </div>
  );
}