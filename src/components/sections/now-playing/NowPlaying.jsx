import React, { useState, useEffect } from 'react';
import { fetchNowPlayingMovies } from "./fetchNowPlaying";
import './NowPlaying.css';
import SmallCarousel from "../../utilities/SmallCarousel.js";

function NowPlaying() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

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

  return (
    <div id="now-playing" className="now-playing">
      <h2 className="now-playing-section-title">Now Playing</h2>
      <SmallCarousel items={nowPlayingMovies} />
    </div>
  );
}

export default NowPlaying;