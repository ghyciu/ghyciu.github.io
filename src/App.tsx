import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import halftoneOverlay from './assets/images/halftone-overlay.png';
import WorkInProgress from './pages/Special/WorkInProgress/WorkInProgress';

const App: React.FC = () => {
  return (
    <div className="app-root">
      <img src={halftoneOverlay} alt="halftone overlay" className="halftone-overlay" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<WorkInProgress />} />
        <Route path="/design" element={<WorkInProgress />} />
        <Route path="/cosplay" element={<WorkInProgress />} />
        <Route path="/blog" element={<WorkInProgress />} />
        <Route path="/contact" element={<WorkInProgress />} />
      </Routes>
    </div>
  );
};

export default App;
