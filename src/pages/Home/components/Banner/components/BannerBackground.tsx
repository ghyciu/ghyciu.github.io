import React, { useEffect, useRef } from 'react';
import BannerBackgroundImage from '../../../../../assets/images/banner_bg.jpg';
import '../Banner.css';

const BannerBackground: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const animRef = useRef({ tx: 0, ty: 0, targetX: 0, targetY: 0, rafId: 0 });

  useEffect(() => {
    const maxX = 30;
    const maxY = 20;

    const handleMouseMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;
      animRef.current.targetX = -nx * maxX;
      animRef.current.targetY = -ny * maxY;
    };

    const animate = () => {
      const s = animRef.current;
      s.tx += (s.targetX - s.tx) * 0.08;
      s.ty += (s.targetY - s.ty) * 0.08;
      if (imgRef.current) {
        imgRef.current.style.transform = `translate(${s.tx}px, ${s.ty}px) scale(1.05)`;
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

  return <img ref={imgRef} className="banner-image" src={BannerBackgroundImage} alt="Banner" />;
};

export default BannerBackground;
