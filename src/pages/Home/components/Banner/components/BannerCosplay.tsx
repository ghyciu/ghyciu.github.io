import React, { useEffect, useRef } from 'react';
import BannerCosplayImage from '../../../../../assets/images/banner_cosplay.png';

const BannerCosplay: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef({ tx: 0, ty: 0, targetX: 0, targetY: 0, rafId: 0 });

  useEffect(() => {
    const maxX = 20;
    const maxY = 10;

    // Helper function to wait for a 'transform' step to finish before moving to the next step.
    // Used when animating the intro sequence.
    const waitForTransition = (el: Element | null) =>
      new Promise<void>(resolve => {
        if (!el) return resolve();
        const handler = (e: Event) => {
          if ((e as TransitionEvent).propertyName && (e as TransitionEvent).propertyName.includes('transform')) {
            el.removeEventListener('TransitionEnd', handler);
            resolve();
          }
        };
        el.addEventListener('TransitionEnd', handler);

        // Fallback in case TransitionEnd doesn't fire
        setTimeout(() => {
          el.removeEventListener('TransitionEnd', handler);
          resolve();
        }, 1200);
      });

    const handleMouseMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;
      animRef.current.targetX = nx * maxX;
      animRef.current.targetY = ny * maxY;
    };

    const animate = () => {
      const s = animRef.current;
      s.tx += (s.targetX - s.tx) * 0.12;
      s.ty += (s.targetY - s.ty) * 0.12;
      if (containerRef.current) {
        containerRef.current.style.transform = `translate(calc(-70% + ${s.tx}px), calc(20px + ${s.ty}px)) scale(1)`;
      }
      s.rafId = requestAnimationFrame(animate);
    };

    const runIntro = async () => {
      const el = containerRef.current;
      if (!el) return;
      el.style.transition = '';

      // Step 0: Set initial position of element
      el.style.transform = 'translate(-120%, 80vh) scale(1)';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;

      // Step 1: Set vertical position (move up)
      el.style.transition = 'transform 900ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = 'translate(-120%, calc(20px)) scale(1)';
      await waitForTransition(el);

      // Step 2: Set horizontal position (move right)
      el.style.transition = 'transform 700ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = 'translate(calc(-70%), 20px) scale(1)';
      await waitForTransition(el);

      // Step 3: Initialize MouseMove animation
      el.style.transition = '';
      animRef.current.tx = 0;
      animRef.current.ty = 0;
      animRef.current.targetX = 0;
      animRef.current.targetY = 0;
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      animRef.current.rafId = requestAnimationFrame(animate);
    };

    runIntro();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animRef.current.rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="banner-cosplay">
      <img className="banner-cosplay-img" src={BannerCosplayImage} alt="Banner Cosplay" />
    </div>
  );
};

export default BannerCosplay;
