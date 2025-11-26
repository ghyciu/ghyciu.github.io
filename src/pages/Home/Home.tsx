import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Footer from '../../components/Footer/Footer';
import Cosplay from './components/Cosplay/Cosplay';

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <About />
      <Cosplay />
      <Footer />
    </div>
  );
};

export default Home;
