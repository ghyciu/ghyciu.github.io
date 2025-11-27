import React, { useEffect, useRef, useState } from 'react';

const CosplayBlurb = () => {
  const [visible, setVisible] = useState(false);
  const blurbRef = useRef<HTMLDivElement>(null);

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
    if (blurbRef.current) {
      observer.observe(blurbRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={blurbRef} className={`home-cosplay-blurb${visible ? ' float-in-up' : ''}`}>
      For me, cosplaying has been a never-ending journey of self-improvement. Learning how to do my own makeup, style my wig, and interact with other people who share the same interests as I do has
      not only boosted my confidence but also helped me develop valuable skills that I can apply in other areas of my life.
    </div>
  );
};

export default CosplayBlurb;
