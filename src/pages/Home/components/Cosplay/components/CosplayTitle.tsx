import React, { useEffect, useRef, useState } from 'react';

const CosplayTitle = () => {
  const [visible, setVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

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
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={titleRef} className={`home-cosplay-title${visible ? ' float-in-up' : ''}`}>
      Cosplay
    </div>
  );
};

export default CosplayTitle;
