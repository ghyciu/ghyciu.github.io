import React, { useEffect, useRef, useState } from 'react';

const CosplayMore = () => {
  const [visible, setVisible] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

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
    if (moreRef.current) {
      observer.observe(moreRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={moreRef} className={`home-cosplay-more${visible ? ' float-in-up' : ''}`}>
      <a href="/cosplay">
        Read more about my cosplays
        <span className="home-cosplay-more-arrow" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default CosplayMore;
