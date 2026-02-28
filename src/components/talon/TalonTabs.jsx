import { NavLink } from 'react-router-dom';
import styles from './TalonTabs.module.scss';

export default function TalonTabs() {
  const getLinkClass = ({ isActive }) => `nav-link me-2${isActive ? ` ${styles.active}` : ''}`;

  return (
    <div className={styles.talonTabs}>
      <ul className="nav nav-pills">
        <NavLink className={getLinkClass} to="/talon/cheatsheet">
          <li>Cheatsheet</li>
        </NavLink>
        <NavLink className={getLinkClass} to="/talon/scripts">
          <li>Custom Scripts</li>
        </NavLink>
      </ul>
    </div>
  );
}
