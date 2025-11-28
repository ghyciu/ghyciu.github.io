import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Cosplay from './components/Cosplay/Cosplay';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className="home-root">
      <div className="home-content">
        <Banner />
        <About />
        <Projects />
        <Cosplay />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
