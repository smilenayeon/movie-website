import React from 'react';
import './App.css';
import Hero from "./components/layouts/hero/Hero.jsx";
import Navbar from "./components/layouts/navbar/Navbar.jsx";
import NowPlaying from "./components/sections/now-playing/NowPlaying.jsx";
import Popular from "./components/sections/popular/Popular.jsx";
import TopRated from "./components/sections/top-rated/TopRated.jsx";
import UpComing from './components/sections/up-coming/UpComing.jsx';
import MovieDetails from "./components/utilities/MovieDetails.jsx";

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const movieId = urlParams.get('movieId');

  return (
    <div className="App">
      {movieId ? (
        <MovieDetails movieId={movieId} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <NowPlaying />
          <Popular />
          <TopRated />
          <UpComing />
        </>
      )}
    </div>
  );
}

export default App;
