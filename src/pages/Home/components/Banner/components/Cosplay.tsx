import React, { useEffect, useRef } from 'react';
import BannerCosplayImage from '../../../../../assets/images/banner_cosplay.png';

const BannerCosplay: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef({ tx: 0, ty: 0, targetX: 0, targetY: 0, rafId: 0 });

  useEffect(() => {
    const maxX = 20;
    const maxY = 10;

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
        containerRef.current.style.transform = `translate(calc(-80% + ${s.tx}px), calc(20px + ${s.ty}px)) scale(1)`;
      }
      s.rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animRef.current.rafId = requestAnimationFrame(animate);

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
