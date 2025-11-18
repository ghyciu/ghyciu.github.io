import React from 'react';
import './Banner.css';

import BannerBackground from '../../../../assets/images/banner_bg.jpg';

import BannerCosplay from './Cosplay/BannerCosplay';

interface BannerProps {
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className={`banner`}>
      <img className="banner-image" src={BannerBackground} alt="Banner" />
      <div className="banner-overlay">
        <BannerCosplay />
      </div>
    </div>
  );
};

export default Banner;
