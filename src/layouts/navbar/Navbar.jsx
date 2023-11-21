import React,{useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/images/movie-search-logo.png";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const [isOpen,setIsOpen]=useState(false);

    const hamburgerClick=()=>{
        setIsOpen(!isOpen)
    };

    const logoClick = ()=>{
      navigate("/");
      setIsOpen(false);

    }

  return (
    <div className="navbar">
   
    <img className="logo" onClick={logoClick} src={Logo} alt="logo"/>

    

        <ul className={`navbar-links ${isOpen? "":"hidden"}`}>
            <li onClick={()=>setIsOpen(!isOpen)}><Link to="/now-playing">Now Playing</Link></li>
            <li onClick={()=>setIsOpen(!isOpen)}><Link to="/popular">Popular</Link></li>
            <li onClick={()=>setIsOpen(!isOpen)}><Link to="/top-rated">Top Rated</Link></li>
            <li onClick={()=>setIsOpen(!isOpen)}><Link to="/up-coming">Up Coming</Link></li>
            <form>
                <label htmlFor="movie-search" name="movie-search"></label>
                <input type="text" placeholder="search movie title" />
                <input  className="search-button" type="submit" value="Search"/>
            </form>
        </ul>
        
        

        <button onClick={hamburgerClick} className="hamburger-menu"><div className={`hamburger-menu-icon ${isOpen?"open":""}`}></div></button>
    
    </div>
  )
}

export default Navbar;