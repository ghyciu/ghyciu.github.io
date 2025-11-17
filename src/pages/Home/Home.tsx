import Banner from './components/Banner/Banner';

const Home: React.FC = () => {
  return (
    <div>
      <Banner image="https://placehold.co/1200x800/000000/FFF" alt="Welcome Banner">
        Text Overlay on Banner
      </Banner>
      Text Below Banner
    </div>
  );
};

export default Home;
