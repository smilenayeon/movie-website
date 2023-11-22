import React, {useState} from 'react';
import "./SmallCarousel.css";
import MovieDetails from './MovieDetails';

function SmallCarousel({items}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 6; // Number of items to show at a time

  const next = () => {
    setCurrentIndex(prevIndex => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  // Calculate indices of items to display
  const displayItems = [];
  for (let i = 0; i < itemsToShow; i++) {
    let index = (currentIndex + i) % items.length;
    displayItems.push(items[index]);
  }
  const handlePosterClick = (movieId) => {
    const url = `https://www.themoviedb.org/movie/${movieId}`;
    window.open(url, '_blank'); // Open in new tab
  };

  return (
    <div className="small-carousel">
      <button onClick={prev} className="prev-button"><i className="fa-solid fa-arrow-left"></i></button>
      <div className="small-carousel-container">
        <div className="small-carousel-track">
        {displayItems.map((item, index) => (
            item && ( // Check if item is defined
              <div className="small-carousel-item" key={index} onClick={() => handlePosterClick(item.id)} >
<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || 'Movie Image'} />
              </div>
            )
          ))}
        </div>
      </div>
      <button onClick={next} className="next-button"><i className="fa-solid fa-arrow-right"></i></button>
    </div>
  );
}

export default SmallCarousel;