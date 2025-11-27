import './Cosplay.css';
import CosplayTitle from './components/CosplayTitle';
import CosplayBlurb from './components/CosplayBlurb';
import CosplayCards from './components/CosplayCards';

const Cosplay = () => {
  return (
    <div className="home-cosplay">
      <CosplayTitle />
      <CosplayBlurb />
      <CosplayCards />
    </div>
  );
};

export default Cosplay;
