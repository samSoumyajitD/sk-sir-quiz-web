import logo from './nitalogo.png';
import './App.css';
import Welcomepage from './components/welcomepage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuButton from './components/main';
import RnR from './components/relugation'

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Welcomepage />} />
          <Route path="/home" element={<MenuButton />} />
          <Route path="/rules&regulations" element={<RnR
      
      />} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
