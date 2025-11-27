import CosplayCard from './CosplayCard';
import CosplayMarch7th from '../../../../../assets/images/cos_march7th.jpg';

import React, { useEffect, useRef, useState } from 'react';

const CosplayCards = () => {
  const cosplayCards = [
    {
      image: CosplayMarch7th,
      title: 'March 7th',
      date: '2025-10'
    }
  ];

  const [visible, setVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={cardsRef} className={`home-cosplay-grid${visible ? ' float-in-up' : ''}`}>
      {cosplayCards.map((card, idx) => (
        <CosplayCard key={idx} image={card.image} title={card.title} date={card.date} />
      ))}
    </div>
  );
};

export default CosplayCards;
