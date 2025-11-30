import React from 'react';
import './Header.css';

import LogoWhite from '../../assets/icons/logo_white.png';

interface HeaderProps {
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-container">
        <div className="header-logo">
          <a href="/">
            <img src={LogoWhite} alt="Logo" />
            <div className="header-title">Ghyciu</div>
          </a>
        </div>
        <div className="header-tabs">
          <a href="/projects">Projects</a>
          <a href="/design">Design</a>
          <a href="/cosplay">Cosplay</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
