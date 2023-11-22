import React,{useState, useEffect} from 'react';
import {fetchTop10Moives} from "./fetchTop10Movies";
import Carousel from "./Carousel";
import "./Hero.css";

function Hero() {
  const [top10Movies, setTop10Movies] = useState([]);


  useEffect(()=>{
    const fetchData = async()=>{
      const movies=await fetchTop10Moives();
      setTop10Movies(movies);
    }
    fetchData();
  },[]);

 
  return (
    <div id="hero" className="hero-section">
    
    <Carousel items ={top10Movies}/>

   </div>
  )
}

export default Hero;