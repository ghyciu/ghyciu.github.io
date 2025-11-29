import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import WorkInProgress from './pages/Special/WorkInProgress/WorkInProgress';
import Invalid from './pages/Special/Invalid/Invalid';

import './App.css';

import HalftoneOverlay from './assets/images/halftone-overlay.png';
import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (isHomePage) {
        // On home page, show header only after scrolling 100vh
        setIsHeaderVisible(scrollY >= viewportHeight);
      } else {
        // On other pages, always show header
        setIsHeaderVisible(true);
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <div className="app-root">
      <Header isVisible={isHeaderVisible} />
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
