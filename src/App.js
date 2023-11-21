import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Hero from "./layouts/hero/Hero.jsx";
import Navbar from "./layouts/navbar/Navbar.jsx";
import NowPlaying from "./components/now-playing/NowPlaying.jsx";
import Popular from "./components/popular/Popular.jsx";
import TopRated from "./components/top-rated/TopRated.jsx";
import UpComing from "./components/up-coming/UpComing.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element=<Hero/>/>
          <Route path="/now-playing" element=<NowPlaying/> />
          <Route path="/popular" element=<Popular/> />
          <Route path="/top-rated" element=<TopRated/> />
          <Route path="/up-coming" element=<UpComing/> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
