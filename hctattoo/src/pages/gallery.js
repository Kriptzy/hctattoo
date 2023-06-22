import React, {useState} from 'react';
import photo1 from '../img/gallery/photo1.jpg'
import photo2 from '../img/gallery/photo2.jpg'
import photo3 from '../img/gallery/photo3.jpg'
import photo4 from '../img/gallery/photo4.jpg'
import photo5 from '../img/gallery/photo5.jpg'
import photo6 from '../img/gallery/photo6.jpg'
import photo7 from '../img/gallery/photo7.jpg'
import photo8 from '../img/gallery/photo8.jpg'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageViewer = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="gallery-container">
        <div className="gallery-image-container">
          <div className="gallery-background"></div>
          <div className="gallery-text-container">
            <div className="gallery-title">Galeria</div>
          </div>
        </div>
          <div className="gallery-thumbnails">
            <img src={photo1} alt="photo-1" onClick={() => openImageViewer(photo1)}/>
            <img src={photo2} alt="photo-2" onClick={() => openImageViewer(photo2)}/>
            <img src={photo3} alt="photo-3" onClick={() => openImageViewer(photo3)}/>
            <img src={photo4} alt="photo-4" onClick={() => openImageViewer(photo4)}/>
          </div>
          <div className="gallery-thumbnails">
            <img src={photo5} alt="photo-5" onClick={() => openImageViewer(photo5)}/>
            <img src={photo6} alt="photo-6" onClick={() => openImageViewer(photo6)}/>
            <img src={photo7} alt="photo-7" onClick={() => openImageViewer(photo7)}/>
            <img src={photo8} alt="photo-8" onClick={() => openImageViewer(photo8)}/>
          </div>
          {selectedImage && (
      <div className="image-viewer-overlay" onClick={closeImageViewer}>
        <div className="image-viewer-container">
          <img src={selectedImage} alt="Full-sized Image" />
        </div>
      </div>
    )}
      </div>
    </div>
  );
}
