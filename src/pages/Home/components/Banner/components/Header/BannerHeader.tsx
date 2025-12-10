import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BannerHeaderLogo from './BannerHeaderLogo';
import BannerHeaderLink from './BannerHeaderLink';

const BannerHeader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { label: 'Welcome', href: '/welcome', route: '/' },
    { label: 'Projects', href: '/projects', route: '/projects' },
    { label: 'Design', href: '/design', route: '/design' },
    { label: 'Cosplay', href: '/cosplay', route: '/cosplay' },
    { label: 'Blog', href: '/blog', route: '/blog' },
    { label: 'Contact', href: '/contact', route: '/contact' }
  ] as const;

  const currentTab = useMemo(() => {
    const match = tabs.find(t => t.route === location.pathname);
    return match ?? tabs[0];
  }, [location.pathname]);

  const closeOnOutside = useCallback((e: MouseEvent) => {
    if (!dropdownRef.current) return;
    if (!dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', closeOnOutside);
    } else {
      document.removeEventListener('mousedown', closeOnOutside);
    }
    return () => document.removeEventListener('mousedown', closeOnOutside);
  }, [isOpen, closeOnOutside]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.style.transition = '';
    el.style.transform = 'translateY(-250%)';
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight;

    let played = false;
    const playIntro = () => {
      if (played) return;
      played = true;
      el.style.transition = 'transform 700ms cubic-bezier(.2,.9,.2,1)';
      el.style.transform = 'translateY(0)';
    };

    const handler = () => playIntro();
    window.addEventListener('bannerIntroComplete', handler as EventListener);

    return () => {
      window.removeEventListener('bannerIntroComplete', handler as EventListener);
      if (!el) return;
      el.style.transition = '';
      el.style.transform = '';
    };
  }, []);

  return (
    <div className="banner-header" ref={containerRef}>
      <BannerHeaderLogo />
      <nav className="banner-nav">
        {tabs.map(({ label, href, route }) => (
          <BannerHeaderLink key={label} label={label} href={href} selected={location.pathname === route} />
        ))}
      </nav>
      <div className="banner-nav-dropdown" ref={dropdownRef}>
        <button
          type="button"
          className="banner-nav-dropdown-toggle"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls="banner-nav-dropdown-menu"
          onClick={() => setIsOpen(o => !o)}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(o => !o);
            } else if (e.key === 'Escape') {
              setIsOpen(false);
            }
          }}
        >
          <span className="burger-icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="sr-only">Menu</span>
        </button>
        {isOpen && (
          <ul id="banner-nav-dropdown-menu" className="banner-nav-dropdown-menu" role="listbox">
            {tabs.map(({ label, route }) => {
              const selected = location.pathname === route;
              return (
                <li key={label} role="option" aria-selected={selected} className={selected ? 'dropdown-item selected' : 'dropdown-item'}>
                  <button
                    type="button"
                    className="dropdown-item-button"
                    onClick={() => {
                      setIsOpen(false);
                      navigate(route);
                    }}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        setIsOpen(false);
                        navigate(route);
                      }
                    }}
                  >
                    {label.toUpperCase()}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BannerHeader;
