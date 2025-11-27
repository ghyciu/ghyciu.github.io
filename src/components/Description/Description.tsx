import React, { useEffect, useRef, useState } from 'react';
import './Description.css';

interface DescriptionProps {
  children?: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

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
    if (descRef.current) {
      observer.observe(descRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={descRef} className={`description${visible ? ' float-in-up' : ''}`}>
      {children}
    </div>
  );
};

export default Description;
