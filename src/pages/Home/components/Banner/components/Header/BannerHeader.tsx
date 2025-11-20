import React, { useEffect, useRef } from 'react';
import BannerHeaderLogo from './BannerHeaderLogo';
import BannerHeaderLink from './BannerHeaderLink';

const BannerHeader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.style.transition = '';
    el.style.transform = 'translateY(-250%)';
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight;

    let played = false;
    const playIntro = () => {
      if (played) return;
      played = true;
      el.style.transition = 'transform 700ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = 'translateY(0)';
    };

    const handler = () => playIntro();
    window.addEventListener('bannerIntroComplete', handler as EventListener);

    return () => {
      window.removeEventListener('bannerIntroComplete', handler as EventListener);
      if (!el) return;
      el.style.transition = '';
      el.style.transform = '';
    };
  }, []);

  return (
    <div className="banner-header" ref={containerRef}>
      <BannerHeaderLogo />
      <nav className="banner-nav">
        <BannerHeaderLink label="Welcome" href="/welcome" selected />
        <BannerHeaderLink label="Projects" href="/projects" />
        <BannerHeaderLink label="Design" href="/design" />
        <BannerHeaderLink label="Cosplay" href="/cosplay" />
        <BannerHeaderLink label="Blog" href="/blog" />
        <BannerHeaderLink label="Contact" href="/contact" />
      </nav>
    </div>
  );
};

export default BannerHeader;
