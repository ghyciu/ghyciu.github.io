import React, { useRef, useState } from 'react';

interface BannerContentCardProps {
  icon: string;
  title: string;
  subtitle?: string | '';
  framework?: string | '';
}

const BannerContentCard = (props: BannerContentCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [follower, setFollower] = useState<{ visible: boolean; x: number; y: number }>({
    visible: false,
    x: 0,
    y: 0
  });

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;
    const size = 96; // follower size in px

    // clamp so the follower image stays fully inside the card
    const half = size / 2;
    const x = Math.min(Math.max(rawX, half), rect.width - half);
    const y = Math.min(Math.max(rawY, half), rect.height - half);
    setFollower({ visible: true, x, y });
  };

  const handlePointerEnter = () => setFollower(f => ({ ...f, visible: true }));
  const handlePointerLeave = () => setFollower({ visible: false, x: 0, y: 0 });

  return (
    <div
      className="banner-content-card"
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <img src={props.icon} alt={`${props.title} logo`} />
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <h4>{props.framework}</h4>

      {follower.visible && (
        <img
          src={props.icon}
          alt=""
          style={{
            position: 'absolute',
            left: follower.x,
            top: follower.y,
            transform: 'translate(-50%, -50%) scale(3)',
            pointerEvents: 'none',
            opacity: 0.5,
            mixBlendMode: 'normal',
            filter: 'blur(15px) saturate(200%) contrast(60%) brightness(150%)'
          }}
        />
      )}
    </div>
  );
};

export default BannerContentCard;
