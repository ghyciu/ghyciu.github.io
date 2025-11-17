import React from 'react';
import './Banner.css';

interface BannerProps {
  image?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ image, alt = 'Banner image', children, className = '' }) => {
  return (
    <div className={`banner ${className}`}>
      {image ? <img className="banner-image" src={image} alt={alt} /> : null}
      <div className="banner-overlay">{children}</div>
    </div>
  );
};

export default Banner;
