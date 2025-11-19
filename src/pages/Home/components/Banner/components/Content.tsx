import React, { useEffect, useRef } from 'react';

import XIcon from '../../../../../assets/icons/sns_x.png';
import GithubIcon from '../../../../../assets/icons/sns_github.png';
import InstagramIcon from '../../../../../assets/icons/sns_instagram.png';
import MailIcon from '../../../../../assets/icons/sns_mail.png';

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
      <h2>SOFTWARE ENGINEERING</h2>
      <h2>GRAPHIC DESIGN</h2>
      <h2>COSPLAY</h2>
      <div className="banner-sns-icons">
        <a href="https://x.com/ghyciu" target="_blank" rel="noopener noreferrer">
          <img src={XIcon} alt="X" className="banner-sns-icon" />
        </a>
        <a href="https://instagram.com/ghyciu" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="banner-sns-icon" />
        </a>
        <a href="https://github.com/ghyciu" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="GitHub" className="banner-sns-icon" />
        </a>
        <a href="mailto:contact@ghyciu.com">
          <img src={MailIcon} alt="Mail" className="banner-sns-icon" />
        </a>
      </div>
    </div>
  );
};

export default BannerContent;
