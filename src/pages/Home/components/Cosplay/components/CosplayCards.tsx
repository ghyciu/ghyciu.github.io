import CosplayCard from './CosplayCard';
import CosplayMarch7th from '../../../../../assets/images/cos_march7th.jpg';

const CosplayCards = () => {
  const cosplayCards = [
    {
      image: CosplayMarch7th,
      title: 'March 7th',
      date: '2025-10'
    }
  ];

  return (
    <div className="home-cosplay-grid">
      {cosplayCards.map((card, idx) => (
        <CosplayCard key={idx} image={card.image} title={card.title} date={card.date} />
      ))}
    </div>
  );
};

export default CosplayCards;
