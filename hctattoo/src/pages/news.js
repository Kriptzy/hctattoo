import React from 'react';

export default function News() {
  const newsItems = [
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
          {/* Map over the news items and generate elements */}
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