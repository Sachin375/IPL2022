import './App.css';
import {Routes, Route} from 'react-router-dom';
import TeamCard from './TeamCard';
import Player from './Player';
import Header from './Header';
import Footer from './Footer';
import PointTable from './PointTable';
import About from './About';
import Match from './Match';
function App() {
  return (<>
    <Header/>
    <Routes>
    
      <Route path='/' element = {<TeamCard/> } />
      <Route path='/players/:team' element = {<Player/> } />
      <Route path='/point' element = {<PointTable/> } />
      <Route path='/about' element = {<About/> } />
      <Route path='/matches' element = {<Match/> } />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
