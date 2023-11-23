import React, { useState, useEffect } from 'react';
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    // Automatically advance the carousel every 3 seconds (adjust as needed)
    const autoAdvance = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(autoAdvance);
    };
  }, [currentIndex,items]);


  return (

    <div className="carousel">
       <button onClick={prevSlide}><i className="fa-solid fa-arrow-left"></i></button>
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentIndex ? 'active' : ''
          }`}
        >
        <a href={`/movie-details?movieId=${item.id}`} target="_blank" rel="noreferrer">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
          </a>
          <h3>Top {index + 1}</h3>
        </div>
      ))}
      <button onClick={nextSlide}><i className="fa-solid fa-arrow-right"></i></button>
    </div>
  );
};

export default Carousel;
