import './Cosplay.css';

import Title from '../../../../components/Title/Title';
import Description from '../../../../components/Description/Description';

import CosplayCards from './components/CosplayCards';
import CosplayMore from './components/CosplayMore';

const Cosplay = () => {
  return (
    <div className="home-cosplay">
      <Title>Cosplay</Title>
      <Description>
        <p>
          For me, cosplaying has been a never-ending journey of self-improvement. Learning how to do my own makeup, style my wig, and interact with other people who share the same interests as I do
          has not only boosted my confidence but also helped me develop valuable skills that I can apply in other areas of my life.
        </p>
      </Description>
      <CosplayCards />
      <CosplayMore />
    </div>
  );
};

export default Cosplay;
