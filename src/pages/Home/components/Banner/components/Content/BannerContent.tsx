import React, { useEffect, useRef } from 'react';

import BannerContentLink from './BannerContentLink';
import BannerContentCards from './BannerContentCards';
import BannerContentSocial from './BannerContentSocial';

import XIcon from '../../../../../../assets/icons/sns_x.png';
import GithubIcon from '../../../../../../assets/icons/sns_github.png';
import InstagramIcon from '../../../../../../assets/icons/sns_instagram.png';
import MailIcon from '../../../../../../assets/icons/sns_mail.png';

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
      <BannerContentLink label="Software Engineering" href="/blank" />
      <BannerContentLink label="Graphic Design" href="/blank" />
      <BannerContentLink label="Cosplay" href="/blank" />
      <BannerContentCards />
      <div className="banner-sns-icons">
        <BannerContentSocial icon={XIcon} href="https://x.com/ghyciu" alt="X" />
        <BannerContentSocial icon={InstagramIcon} href="https://instagram.com/ghyciu" alt="Instagram" />
        <BannerContentSocial icon={GithubIcon} href="https://github.com/ghyciu" alt="GitHub" />
        <BannerContentSocial icon={MailIcon} href="mailto:contact@ghyciu.com" alt="Mail" />
      </div>
    </div>
  );
};

export default BannerContent;
