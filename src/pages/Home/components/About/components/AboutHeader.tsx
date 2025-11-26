import React, { useEffect, useState } from 'react';

interface AboutHeaderProps {
  title: string;
}

const AboutHeader: React.FC<AboutHeaderProps> = ({ title }) => {
  const [visible, setVisible] = useState(false);
  const headerRef = React.useRef<HTMLDivElement>(null);

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
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={headerRef} className={`about-header${visible ? ' fade-in' : ''}`}>
      <h2>{title}</h2>
    </div>
  );
};

export default AboutHeader;
