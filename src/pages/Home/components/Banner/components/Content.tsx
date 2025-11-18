import React from 'react';

import XIcon from '../../../../../assets/icons/sns_x.png';
import GithubIcon from '../../../../../assets/icons/sns_github.png';
import InstagramIcon from '../../../../../assets/icons/sns_instagram.png';
import MailIcon from '../../../../../assets/icons/sns_mail.png';

const BannerContent: React.FC = () => {
  return (
    <div className="banner-content">
      <h1>Ghyciu</h1>
      <h2>Software Engineering, Graphic Design, Cosplay</h2>
      <div className="banner-sns-icons">
        <a href="https://x.com/ghyciu" target="_blank" rel="noopener noreferrer">
          <img src={XIcon} alt="X" className="banner-sns-icon" />
        </a>
        <a href="https://instagram.com/ghyciu" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="banner-sns-icon" />
        </a>
        <a href="https://github.com/ghyciu" target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="GitHub" className="banner-sns-icon" />
        </a>
        <a href="mailto:contact@ghyciu.com">
          <img src={MailIcon} alt="Mail" className="banner-sns-icon" />
        </a>
      </div>
    </div>
  );
};

export default BannerContent;
