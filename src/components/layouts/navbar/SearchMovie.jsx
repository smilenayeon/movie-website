import React, { useState } from 'react';
import "./SearchMovie.css";
import { fetchMovieSearchData } from './fetchMovieSearchData';

function SearchMovie() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const movieResults = await fetchMovieSearchData(searchQuery);
    if (movieResults.length > 0) {
      const movieDetailsUrl = `/movie-details?movieId=${movieResults[0].id}`;
      window.open(movieDetailsUrl, '_blank');
    }
  }

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="Search movie title" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input className="search-button" type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default SearchMovie;

