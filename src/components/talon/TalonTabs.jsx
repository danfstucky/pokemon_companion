import { NavLink } from 'react-router-dom';
import styles from './TalonTabs.module.scss';

export default function TalonTabs() {
  const getLinkClass = ({ isActive }) => (isActive ? styles.active : '');

  return (
    <nav className={styles.talonTabs} aria-label="Talon sections">
      <ul>
        <li>
          <NavLink className={getLinkClass} to="/talon/cheatsheet">
            Cheatsheet
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/talon/scripts">
            Custom Scripts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
