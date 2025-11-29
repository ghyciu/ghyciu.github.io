import React from 'react';
import './Header.css';

interface HeaderProps {
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-container">
        <h1 className="header-title">My Website</h1>
      </div>
    </header>
  );
};

export default Header;
