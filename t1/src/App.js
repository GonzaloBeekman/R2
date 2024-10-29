
import React, { useState, useEffect } from 'react';
import './App.css';

const images = [
  './img/vegeta.jpeg',
  './img/goku.jpeg',
  './img/bardock.jpeg'
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (event.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="gallery">
      <img src={images[currentIndex]} alt="Gallery" />
    </div>
  );
};

export default Gallery;
