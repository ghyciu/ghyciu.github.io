import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import halftoneOverlay from './assets/images/halftone-overlay.png';

const App: React.FC = () => {
  return (
    <div className="app-root">
      <img src={halftoneOverlay} alt="halftone overlay" className="halftone-overlay" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
