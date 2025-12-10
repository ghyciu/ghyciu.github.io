import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Cosplay from './components/Cosplay/Cosplay';
import { useState } from 'react';

import './Home.css';

type FilterTab = 'all' | 'projects' | 'cosplay';

const Home: React.FC = () => {
  const [filter, setFilter] = useState<FilterTab>('all');

  return (
    <div className="home-root">
      <Banner />
      <About />
      <div className="home-filter-tabs-container">
        <div className="home-filter-tabs">
          <button className={`home-filter-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            <span>All</span>
          </button>
          <button className={`home-filter-tab ${filter === 'projects' ? 'active' : ''}`} onClick={() => setFilter('projects')}>
            <span>Projects</span>
          </button>
          <button className={`home-filter-tab ${filter === 'cosplay' ? 'active' : ''}`} onClick={() => setFilter('cosplay')}>
            <span>Cosplay</span>
          </button>
        </div>
      </div>
      {(filter === 'all' || filter === 'projects') && <Projects />}
      {(filter === 'all' || filter === 'cosplay') && <Cosplay />}
    </div>
  );
};

export default Home;
