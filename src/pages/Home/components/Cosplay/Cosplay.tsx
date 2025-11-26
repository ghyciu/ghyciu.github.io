import './Cosplay.css';
import CosplayCard from './components/CosplayCard';

import CosplayMarch7th from '../../../../assets/images/cos_march7th.jpg';

const Cosplay = () => {
  const cosplayCards = [
    {
      image: CosplayMarch7th,
      title: 'March 7th',
      date: '2025-10'
    }
  ];

  return (
    <div className="home-cosplay">
      <h2>Cosplay</h2>
      <p>
        For me, cosplaying has been a never-ending journey of self-improvement. Learning how to do my own makeup, style my wig, and interact with other people who share the same interests as I do has
        not only boosted my confidence but also helped me develop valuable skills that I can apply in other areas of my life.
      </p>
      <div className="home-cosplay-grid">
        {cosplayCards.map((card, idx) => (
          <CosplayCard key={idx} image={card.image} title={card.title} date={card.date} />
        ))}
      </div>
    </div>
  );
};

export default Cosplay;
