import React, { useEffect, useRef } from 'react';

import BannerContentLink from './BannerContentLink';
import BannerContentCards from './BannerContentCards';
import Socials from '../../../../../../components/Socials/Socials';

const BannerContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Initialize children hidden
    const children = Array.from(el.querySelectorAll(':scope > *')) as HTMLElement[];
    children.forEach(child => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(10px)';
      child.style.transition = 'opacity 320ms ease, transform 320ms ease';
    });

    const revealSequence = () => {
      children.forEach((child, i) => {
        const delay = i * 180; // ms stagger
        window.setTimeout(() => {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, delay);
      });
    };

    // Listen for the event dispatched from Title.tsx
    const handler = () => revealSequence();
    window.addEventListener('bannerIntroComplete', handler as EventListener);

    return () => {
      window.removeEventListener('bannerIntroComplete', handler as EventListener);
    };
  }, []);

  return (
    <div ref={containerRef} className="banner-content">
      <BannerContentLink label="Software Engineering" href="/projects" />
      <BannerContentLink label="Graphic Design" href="/design" />
      <BannerContentLink label="Cosplay" href="/cosplay" />
      <BannerContentCards />
      <Socials />
    </div>
  );
};

export default BannerContent;
