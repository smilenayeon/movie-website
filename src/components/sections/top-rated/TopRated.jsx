import React,{useState, useEffect} from 'react';
import {fetchTopRatedMovies} from "./fetchTopRatedMovies";
import "./TopRated.css";
import SmallCarousel from '../../utilities/SmallCarousel';

function TopRated() {
  const [topRatedMovies, setTopRatedMovies]=useState([]);
  useEffect(()=>{
     fetchTopRatedMovies()
    .then((movies)=>{setTopRatedMovies(movies)})
    .catch((error)=>{
      console.error('Error fetching top-rated movies:', error);
    });
   },[]);
  return (
    <div id="top-rated" >
    <h2 className="popular-section-title">Top-Rated</h2>
    <SmallCarousel items={topRatedMovies}/>
    </div>
  )
}

export default TopRated;