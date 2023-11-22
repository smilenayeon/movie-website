import './App.css';
import Hero from "./components/layouts/hero/Hero.jsx";
import Navbar from "./components/layouts/navbar/Navbar.jsx";
import NowPlaying from "./components/sections/now-playing/NowPlaying.jsx";
import Popular from "./components/sections/popular/Popular.jsx";
import TopRated from "./components/sections/top-rated/TopRated.jsx";
import UpComing from './components/sections/up-coming/UpComing.jsx';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Hero/>
<NowPlaying/>
<Popular/>
<TopRated/>
<UpComing/>


    </div>
  );
}

export default App;
