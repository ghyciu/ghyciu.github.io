import './Cosplay.css';
import Title from '../../../../components/Title/Title';
import CosplayBlurb from './components/CosplayBlurb';
import CosplayCards from './components/CosplayCards';
import CosplayMore from './components/CosplayMore';

const Cosplay = () => {
  return (
    <div className="home-cosplay">
      <Title>Cosplay</Title>
      <CosplayBlurb />
      <CosplayCards />
      <CosplayMore />
    </div>
  );
};

export default Cosplay;
