import React, { useState, useEffect } from 'react';


const API_KEY = "59eabe110c48b1d6f364ff56c4ba9d12"; 
const API_BASE_URL = "https://api.themoviedb.org/3";

function MovieDetails({movieId}) {

  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]); // Dependency array includes movieId to refetch if it changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="movie-details">
      {movieDetails && (
        <div>
          <h1>{movieDetails.title}</h1>
          {/* Display other movie details like description, release date, etc. */}
        </div>
      )}
    </div>
  );
}

export default MovieDetails;