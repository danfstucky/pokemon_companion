import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useUiStore } from '../../stores/ui';
import danStucky from '../../assets/images/dan_stucky.png';
import styles from './Sidebar.module.scss';

const navGroups = [
  {
    label: 'Profile',
    links: [
      { to: '/about-me', text: 'Who I Am', icon: 'fas fa-user' },
      { to: '/dev-projects', text: 'Dev Projects', icon: 'fas fa-code' },
      { to: '/books', text: 'Books', icon: 'fas fa-book-open' },
      { to: '/research', text: 'Genetics Research', icon: 'fas fa-dna' },
    ],
  },
  {
    label: 'Side Projects',
    links: [
      { to: '/pokemon', text: 'Pokemon Salmon Red', icon: 'fas fa-gamepad' },
      { to: '/talon', text: 'Talon Voice', icon: 'fas fa-microphone-alt' },
    ],
  },
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Links close the menu themselves; this also covers the back/forward buttons.
  useEffect(() => setMenuOpen(false), [pathname]);
  const darkMode = useUiStore((state) => state.darkMode);
  const setDarkMode = useUiStore((state) => state.setDarkMode);
  const getLinkClass = ({ isActive }) => `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`;

  return (
    <nav className={`${styles.sidebar}${menuOpen ? ` ${styles.open}` : ''}`}>
      <div className={styles.sidebarHeader}>
        <NavLink to="/about-me" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <img src={danStucky} alt="" className={styles.avatar} />
          <span className={styles.brandText}>
            <span className={styles.name}>Dan Stucky</span>
            <span className={styles.title}>Senior Software Engineer</span>
          </span>
        </NavLink>
        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
      </div>

      <div className={styles.menu}>
        {navGroups.map((group) => (
          <div key={group.label} className={styles.navGroup}>
            <span className={styles.groupLabel}>{group.label}</span>
            <ul className="list-unstyled">
              {group.links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={getLinkClass} onClick={() => setMenuOpen(false)}>
                    <i className={`${link.icon} ${styles.navIcon}`} aria-hidden="true" />
                    <span>{link.text}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={styles.sidebarFooter}>
          <div className={styles.themeToggle} role="group" aria-label="Color theme">
            <button type="button" aria-pressed={!darkMode} onClick={() => setDarkMode(false)}>
              <i className="fas fa-sun" aria-hidden="true" /> Light
            </button>
            <button type="button" aria-pressed={darkMode} onClick={() => setDarkMode(true)}>
              <i className="fas fa-moon" aria-hidden="true" /> Dark
            </button>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/danfstucky" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-stucky-580464a8/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
