import React from 'react';
import './Banner.css';

import BannerBackground from './components/Background';

import BannerCosplay from './components/Cosplay';
import BannerContent from './components/Content';

interface BannerProps {
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <div className={`banner`}>
      <BannerBackground />
      <div className="banner-overlay">
        {/*<BannerContent />*/}
        <BannerCosplay />
      </div>
    </div>
  );
};

export default Banner;
