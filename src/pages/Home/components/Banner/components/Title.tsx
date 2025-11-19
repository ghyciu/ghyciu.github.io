import React, { useEffect, useRef } from 'react';

const BannerTitle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const waitForTransition = (el: Element | null) =>
      new Promise<void>(resolve => {
        if (!el) return resolve();
        const handler = (e: Event) => {
          const te = e as TransitionEvent;
          if (te.propertyName && te.propertyName.includes('transform')) {
            el.removeEventListener('TransitionEnd', handler);
            resolve();
          }
        };
        el.addEventListener('TransitionEnd', handler);

        // Fallback in case transitionend doesn't fire
        const to = setTimeout(() => {
          el.removeEventListener('TransitionEnd', handler);
          resolve();
        }, 1400);
      });

    const runIntro = async () => {
      const el = containerRef.current;
      if (!el) return;
      el.style.transition = '';

      // Step 0: Set initial position of element
      el.style.transform = 'translate(0%, -120%) scale(1)';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;

      // Step 1: Set vertical position (move down)
      el.style.transition = 'transform 900ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = 'translate(0%, -25%) scale(1)';
      await waitForTransition(el);

      // Step 2: Set horizontal position (move left)
      el.style.transition = 'transform 700ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = 'translate(-40%, -25%) scale(1)';
      await waitForTransition(el);
      el.style.transition = '';
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
