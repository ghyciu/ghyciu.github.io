import React from 'react';
import './Banner.css';

interface BannerProps {
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ image, children, className = '' }) => {
  return (
    <div className={`banner ${className}`}>
      {image ? <img className="banner-image" src={image} /> : null}
      <div className="banner-overlay">{children}</div>
    </div>
  );
};

export default Banner;
