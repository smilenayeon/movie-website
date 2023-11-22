import React,{useState,useEffect} from 'react';
import {fetchUpComingMovies} from "./fetchUpComingMovies.js";
import SmallCarousel from "../../utilities/SmallCarousel.js";
import "./UpComing.css";

function UpComing() {
  const[upComingMovies, setUpComingMovies] = useState([]);
  useEffect(()=>{
    fetchUpComingMovies()
    .then((movies)=> setUpComingMovies(movies))
    .catch((error)=> console.error('Error fetching top-rated movies:', error));
  },[]
  );
  return (
    <div id="up-coming">
    <h2 className="up-coming-section-title">Up-Coming</h2>
    <SmallCarousel items={upComingMovies}/>
    </div>
  )
}

export default UpComing