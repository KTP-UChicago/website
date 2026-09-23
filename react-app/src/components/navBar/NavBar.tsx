import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRIMARY_NAV, SITE } from '../../content/siteConfig';
import { RUSH_CONFIG } from '../../content/rushContent';
import { useAuthentication } from '../../contexts/AuthenticationContext';
import { useScrollNav } from '../../hooks/useScrollNav/useScrollNav';
import Button from '../ui/Button';

const LOGO_FALLBACK = 'assets/img/ktp-logo.png';

function NavBar({ page }: { page: string }) {
  const [expanded, setExpanded] = useState(false);
  const dockRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { user, handleLogin, handleLogout } = useAuthentication();
  const { isAtTop } = useScrollNav();
  const isHome = location.pathname === '/' || page === 'home';
  const navIsExpanded = expanded || !isHome;

  const isActive = (pageKey: string) => page === pageKey;
  const closeNav = () => setExpanded(false);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!expanded) return undefined;

    const handlePointerDown = (event: MouseEvent) => {
      if (dockRef.current && !dockRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [expanded]);

  useEffect(() => {
    document.body.style.overflow = expanded && window.innerWidth < 768 ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [expanded]);

  const navClasses = [
    'ktp-nav',
    'ktp-nav--dock',
    isHome ? 'ktp-nav--home' : '',
    isHome && isAtTop ? 'ktp-nav--transparent' : 'ktp-nav--solid',
    navIsExpanded ? 'ktp-nav--expanded' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleLogoError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = LOGO_FALLBACK;
  };

  return (
    <header className={navClasses}>
      <div className="ktp-nav__dock" ref={dockRef}>
        <button
          type="button"
          className="ktp-nav__trigger"
          aria-label={navIsExpanded ? 'Close navigation' : 'Open navigation'}
          aria-expanded={navIsExpanded}
          aria-controls="ktp-nav-panel"
          onClick={() => setExpanded((open) => !open)}
        >
          <span className="ktp-nav__trigger-bars" aria-hidden="true">
            <span className={`ktp-nav__toggle-bar ${expanded ? 'ktp-nav__toggle-bar--open' : ''}`} />
            <span className={`ktp-nav__toggle-bar ${expanded ? 'ktp-nav__toggle-bar--hidden' : ''}`} />
            <span className={`ktp-nav__toggle-bar ${expanded ? 'ktp-nav__toggle-bar--open' : ''}`} />
          </span>
          <img
            src={SITE.logoPath}
            alt=""
            className="ktp-nav__trigger-logo"
            width={28}
            height={28}
            onError={handleLogoError}
          />
        </button>

        <nav
          id="ktp-nav-panel"
          className="ktp-nav__panel"
          aria-label="Main navigation"
        >
          <ul className="ktp-nav__links">
            <li>
              <Link
                to="/"
                className={`ktp-nav__link ${isHome ? 'ktp-nav__link--active' : ''}`}
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            {PRIMARY_NAV.filter((item) => item.pageKey !== 'rush').map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`ktp-nav__link ${isActive(item.pageKey) ? 'ktp-nav__link--active' : ''}`}
                  onClick={closeNav}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ktp-nav__cta">
            <button
              type="button"
              className="ktp-nav__link ktp-nav__auth"
              onClick={() => {
                closeNav();
                if (user) {
                  handleLogout();
                } else {
                  handleLogin();
                }
              }}
            >
              {user ? 'Sign Out' : 'Sign In'}
            </button>
            <Button
              variant={RUSH_CONFIG.status === 'open' ? 'primary' : 'secondary'}
              href="/rush"
              onClick={closeNav}
            >
              Rush KTP
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
