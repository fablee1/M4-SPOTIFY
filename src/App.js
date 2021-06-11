import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './components/Player/Player';
import LeftNav from './components/LeftNav/LeftNav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Album from './components/Album/Album';
import Artist from './components/Artist/Artist';

function App() {
  return (
    <div className="d-flex h-100" id="main-content">
      <Router>
        <LeftNav />
        <Route exact path="/" component={Home} />
        <Route exact path="/album/:id" component={Album} />
        <Route exact path="/artist/:id" component={Artist} />
        <Player />
      </Router>
    </div>
  );
}

export default App;
