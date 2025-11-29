import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import WorkInProgress from './pages/Special/WorkInProgress/WorkInProgress';
import Invalid from './pages/Special/Invalid/Invalid';

import './App.css';

import HalftoneOverlay from './assets/images/halftone-overlay.png';

const App: React.FC = () => {
  return (
    <div className="app-root">
      <img src={HalftoneOverlay} alt="halftone overlay" className="halftone-overlay" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<WorkInProgress />} />
        <Route path="/design" element={<WorkInProgress />} />
        <Route path="/cosplay" element={<WorkInProgress />} />
        <Route path="/blog" element={<WorkInProgress />} />
        <Route path="/contact" element={<WorkInProgress />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
    </div>
  );
};

export default App;
