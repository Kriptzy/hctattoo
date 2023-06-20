import React from 'react';

export default function NotFound() {
  return (
    <div>
      <div className={`not-found-page no-navbar-footer`}></div>
        <div className="nopage-container">
            <div className="nopage-image-container">
                <div className="nopage-background"></div>
                <div className="nopage-text-container">
                    <div className="nopage-title">Página não encontrada</div>
                </div>
            </div>
        </div>
        <p className="nopage-text">Parece que a pagina que queria entrar pode ter sido removida ou possivelmente nunca existiu.</p>
    </div>
  );
}