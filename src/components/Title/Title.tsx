import React, { useEffect, useRef, useState } from 'react';
import './Title.css';

interface TitleProps {
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
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
    <div ref={titleRef} className={`title${visible ? ' float-in-up' : ''}`}>
      {children}
    </div>
  );
};

export default Title;
