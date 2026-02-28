import { NavLink } from 'react-router-dom';
import { useUiStore } from '../../stores/ui';
import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const getLinkClass = ({ isActive }) => (isActive ? styles.active : '');
  const darkMode = useUiStore((state) => state.darkMode);
  const toggleDarkMode = useUiStore((state) => state.toggleDarkMode);

  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h1>Dan Stucky</h1>
        <h5>Senior Software Engineer</h5>
      </div>
      <ul className="list-unstyled">
        <NavLink to="/about-me" className={getLinkClass}>
          <li>Who I Am</li>
        </NavLink>
        <NavLink to="/dev-projects" className={getLinkClass}>
          <li>Dev Projects</li>
        </NavLink>
        <NavLink to="/pokemon" className={getLinkClass}>
          <li>Pokemon Salmon Red</li>
        </NavLink>
        <NavLink to="/talon" className={getLinkClass}>
          <li>Talon Voice</li>
        </NavLink>
        <NavLink to="/research" className={getLinkClass}>
          <li>Genetics Research</li>
        </NavLink>
      </ul>
      <div className={styles.darkModeToggle}>
        <div className="form-check form-switch mb-0">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
