import { NavLink } from 'react-router-dom';
import styles from './PokemonTabs.module.scss';

export default function PokemonTabs() {
  const getLinkClass = ({ isActive }) => (isActive ? styles.active : '');

  return (
    <nav className={styles.pokeTabs} aria-label="Pokemon sections">
      <ul>
        <li>
          <NavLink className={getLinkClass} to="/pokemon/pokedex">
            Pokedex
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/pokemon/wild-encounters">
            Wild Pokemon
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/pokemon/gyms">
            Gym Leaders
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/pokemon/types">
            Type Chart
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/pokemon/about">
            About Salmon Red
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
