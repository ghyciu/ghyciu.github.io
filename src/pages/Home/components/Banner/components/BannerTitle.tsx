import React, { useEffect, useRef } from 'react';

const BannerTitle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const waitForTransition = (el: Element | null) =>
      new Promise<void>(resolve => {
        if (!el) return resolve();
        let to: number | undefined;
        const handler = (e: Event) => {
          const te = e as TransitionEvent;
          if (te.propertyName && te.propertyName.includes('transform')) {
            el.removeEventListener('transitionend', handler);
            if (to) clearTimeout(to);
            resolve();
          }
        };
        el.addEventListener('transitionend', handler);

        // Fallback in case transitionend doesn't fire
        to = window.setTimeout(() => {
          el.removeEventListener('transitionend', handler);
          resolve();
        }, 1400);
      });

    const runIntro = async () => {
      const el = containerRef.current;
      if (!el) return;
      el.style.transition = '';

      // Step 0: Set initial position of element
      el.style.transform = 'translate(50%, -220%) scale(1)';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;

      // Step 1: Set vertical position (move down)
      el.style.transition = 'transform 900ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = 'translate(50%, -80%) scale(1)';
      await waitForTransition(el);

      // Step 2: Set horizontal position (move left)
      el.style.transition = 'transform 700ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = 'translate(0%, -80%) scale(1)';
      await waitForTransition(el);

      // Step 3: Notify BannerContent to start intro
      el.style.transition = '';
      try {
        window.dispatchEvent(new CustomEvent('bannerIntroComplete'));
      } catch (err) {
        window.dispatchEvent(new Event('bannerIntroComplete'));
      }
    };

    runIntro();
  }, []);

  return (
    <div ref={containerRef} className="banner-title">
      <h1>GHYCIU</h1>
    </div>
  );
};

export default BannerTitle;
