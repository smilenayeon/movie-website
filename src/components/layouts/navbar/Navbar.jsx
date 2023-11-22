import React,{useState} from 'react';
import Logo from "../../../assets/images/movie-search-logo.png";
import "./Navbar.css";

function Navbar() {
   
    const [isOpen,setIsOpen]=useState(false);

    const hamburgerClick=()=>{
        setIsOpen(!isOpen)
    };
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
        setIsOpen(false); // Close the mobile menu after clicking a link
      };


  return (
    <div className="navbar">
   
    <a href="#hero"><img className="logo" onClick={()=>setIsOpen(false)} src={Logo} alt="logo"/></a>

    

        <ul className={`navbar-links ${isOpen? "":"hidden"}`}>
            <li onClick={() => scrollToSection("now-playing")}>Now Playing </li>
            <li onClick={()=> scrollToSection("popular")}>Popular</li>
            <li onClick={()=> scrollToSection("top-rated")}>Top Rated</li>
            <li onClick={()=> scrollToSection("up-coming")}>Up Coming</li>
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