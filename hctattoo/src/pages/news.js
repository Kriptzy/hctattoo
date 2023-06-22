import React from 'react';
import News1 from '../img/news/news1.png';

export default function News() {
  const newsItems = [
    {
      title: "Inauguração do Site Oficial",
      text: "Hoje marca o lançamento do tão esperado site oficial da Loja Hardcore Tattos & Body Piercing. Fiquem a espera por mais noticias que estão por vir.",
      date: "22 de junho de 2023",
      imageSrc: News1,
      altText: "news1"
    },
    {
      title: '',
      text: '',
      date: '',
      imageSrc: 'https://via.placeholder.com/1',
      altText: '',
    },
    {
      title: '',
      text: '',
      date: '',
      imageSrc: 'https://via.placeholder.com/1',
      altText: '',
    },
    {
      title: '',
      text: '',
      date: '',
      imageSrc: 'https://via.placeholder.com/1',
      altText: '',
    },
  ];

  return (
    <div>
      <div className="news-container">
        <div className="news-image-container">
          <div className="news-background"></div>
          <div className="news-text-container">
            <div className="news-text">Noticias</div>
          </div>
        </div>
        <div className="news-list">
          {}
          {newsItems.map((item, index) => (
            <div className="news-item" key={index}>
              <div className="news-item-content">
                <img
                  className="news-image"
                  src={item.imageSrc}
                  alt={item.altText}
                />
                <div className="news-content">
                  <h2 className="news-item-title">{item.title}</h2>
                  <p className="news-item-text">
                    {item.text}
                  </p>
                  <p className="news-item-description">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}