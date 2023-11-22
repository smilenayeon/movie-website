import React, { useState, useEffect } from 'react';
import { fetchNowPlayingMovies } from "./fetchNowPlaying";
import './NowPlaying.css'; // Import your CSS file for styling

function NowPlaying() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    // Fetch now-playing movies when the component mounts
    fetchNowPlayingMovies()
      .then((movies) => {
        setNowPlayingMovies(movies);
      })
      .catch((error) => {
        console.error('Error fetching now-playing movies:', error);
      });
  }, []);

const totalMoviesCount=nowPlayingMovies.length;

const next = () => {
  setCurrentIndex((prevIndex) => (prevIndex === totalMoviesCount - 1 ? 0 : prevIndex + 1));
};

const prev = () => {
  setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalMoviesCount - 1 : prevIndex - 1));
};

  const getDisplayedMovies = () => {
    const startIndex = currentIndex;
   
    return nowPlayingMovies.slice(startIndex);
  };

  return (
    <div id="now-playing" className="now-playing">
      <h2 className="now-playing-section-title">Now Playing</h2>
      <div className="small-carousel">
        <button onClick={prev} className="prev-button"><i className="fa-solid fa-arrow-left"></i></button>
        <div className="small-carousel-container">
          <div
            className="small-carousel-track">
             
            {getDisplayedMovies().map((movie, index) => (
              <div className="small-carousel-item" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={next} className="next-button"><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default NowPlaying;