import React, { useEffect,useState } from 'react';
import {fetchPopularMovies} from "./fetchPopularMovies";
import SmallCarousel from '../../utilities/SmallCarousel';
import "./Popular.css";

function Popular() {
  const [popularMovies, setPopularMovies]= useState([]);

  useEffect(()=>{
   fetchPopularMovies()
   .then((movies)=>{ setPopularMovies(movies)
   })
   .catch((error)=>{
    console.error('Error fetching popular movies:', error);
   });
  },[]);

  return (
    <div  id="popular" className="popular-section">
    <h2 className="popular-section-title">Popular</h2>
    <SmallCarousel items={popularMovies}/>
    
    </div>
  )
}

export default Popular;