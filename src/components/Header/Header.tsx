import React, { useState, useEffect } from 'react';
import './Header.css';

import LogoWhite from '../../assets/icons/logo_white.png';

interface HeaderProps {
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 800);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const tabs = [
    { href: '/projects', label: 'Projects' },
    { href: '/design', label: 'Design' },
    { href: '/cosplay', label: 'Cosplay' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-container">
        <div className="header-logo">
          <a href="/">
            <img src={LogoWhite} alt="Logo" />
            <div className="header-title">Ghyciu</div>
          </a>
        </div>
        {!isMobile && (
          <div className="header-tabs">
            {tabs.map((t) => (
              <a key={t.href} href={t.href}>{t.label}</a>
            ))}
          </div>
        )}
        {isMobile && (
          <div className="header-dropdown">
            <button className="header-dropdown-button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-haspopup="menu">
              Menu
              <span className={`chevron ${open ? 'up' : 'down'}`}>▾</span>
            </button>
            {open && (
              <div className="header-dropdown-menu" role="menu">
                {tabs.map((t) => (
                  <a
                    key={t.href}
                    href={t.href}
                    className="header-dropdown-item"
                    role="menuitem"
                    onClick={() => setOpen(false)}
                  >
                    {t.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
