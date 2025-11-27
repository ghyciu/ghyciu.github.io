import React from 'react';
import './Banner.css';

import BannerBackground from './components/BannerBackground';

import BannerHeader from './components/Header/BannerHeader';
import BannerCosplay from './components/BannerCosplay';
import BannerTitle from './components/BannerTitle';
import BannerContent from './components/Content/BannerContent';

interface BannerProps {
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className="banner">
      <BannerBackground />
      <div className="banner-overlay">
        <BannerHeader />
        <BannerTitle />
        <BannerCosplay />
        <BannerContent />
      </div>
    </div>
  );
};

export default Banner;
