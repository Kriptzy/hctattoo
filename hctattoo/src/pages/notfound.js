import React from 'react';

export default function NotFound() {
  const images = [
    require('../img/notfound/photo1.jpg'),
    require('../img/notfound/photo2.jpg'),
    require('../img/notfound/photo3.jpg'),
    require('../img/notfound/photo4.jpg'),
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div>
      <div className={`not-found-page no-navbar-footer`}></div>
      <div className="nopage-container">
        <div className="nopage-image-container">
          <div className="nopage-background">
          </div>
          <div className="nopage-text-container">
            <div className="nopage-title">Página não encontrada</div>
          </div>
        </div>
      </div>
      <p className="nopage-text">
        Parece que a página que queria entrar pode ter sido removida ou possivelmente nunca existiu.
      </p>
      <div className="nopage-images-container">
        <img src={randomImage} alt="Random Image" className="nopage-images"/>
      </div>
    </div>
  );
}

