import React, { useState, useEffect } from 'react';
import "./MovieDetails.css";
import SmallCarousel from './SmallCarousel';

const API_KEY = "59eabe110c48b1d6f364ff56c4ba9d12"; 
const API_BASE_URL = "https://api.themoviedb.org/3";

function MovieDetails({movieId}) {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const detailsUrl = `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
        const detailsResponse = await fetch(detailsUrl);
        if (!detailsResponse.ok) {
          throw new Error('Network response was not ok for details');
        }
        const detailsData = await detailsResponse.json();

        const videosUrl = `${API_BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`;
        const videosResponse = await fetch(videosUrl);
        if (!videosResponse.ok) {
          throw new Error('Network response was not ok for videos');
        }
        const videosData = await videosResponse.json();

        const creditsUrl = `${API_BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
        const creditsResponse = await fetch(creditsUrl);
        if (!creditsResponse.ok) {
          throw new Error('Network response was not ok for credits');
        }
        const creditsData = await creditsResponse.json();

        setMovieDetails({ ...detailsData, videos: videosData.results, credits: creditsData });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

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

        <div className="movie-detail-info-container">
          <img className="movie-detail-poster" src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title}/>
          <div className="detail-info">
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.overview}</p>
            <p>Release Date: {movieDetails.release_date}</p>
            <p>Rating: {movieDetails.vote_average}</p>
            <p>Runtime: {movieDetails.runtime} minutes</p>
            <div>Genres: {movieDetails.genres.map(genre => <span key={genre.id}>{genre.name} </span>)}</div>
          </div>

          </div>

          <div className="production-info">
            <h2>Production Team</h2>
            <ul>
              {movieDetails.credits.crew.map((member, index) => {
                if (member.department === "Production") {
                  return <li key={index}>{member.name} - {member.job}</li>;
                }
                return null;
              })}
            </ul>
          </div>


          <div className="cast-container">
            <h2>Cast</h2>
             <SmallCarousel items={movieDetails.credits.cast.map(member => ({
            id: member.id,
            title: member.name,
            poster_path: member.profile_path,
            character: member.character
          }))} />
          </div>




          <div>
            <h2>Trailer</h2>
            {movieDetails.videos.map((video) => {
              if (video.site === "YouTube" & video.type === "Trailer") {
                return (
                  <iframe
                    key={video.key}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}



    </div>
  );
}

export default MovieDetails;
