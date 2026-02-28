import { NavLink } from 'react-router-dom'
import styles from './PokemonTabs.module.scss'

export default function PokemonTabs() {
  const getLinkClass = ({ isActive }) =>
    `nav-link${isActive ? ` ${styles.active}` : ''}`

  return (
    <div className={styles.pokeTabs}>
      <ul className="nav nav-pills">
        <NavLink className={getLinkClass} to="/pokemon/pokedex">
          <li>Pokedex</li>
        </NavLink>
        <NavLink className={getLinkClass} to="/pokemon/wild-encounters">
          <li>Wild Pokemon</li>
        </NavLink>
        <NavLink className={getLinkClass} to="/pokemon/gyms">
          <li>Gym Leaders</li>
        </NavLink>
        <NavLink className={getLinkClass} to="/pokemon/types">
          <li>Type Chart</li>
        </NavLink>
        <NavLink className={getLinkClass} to="/pokemon/about">
          <li>About Salmon Red</li>
        </NavLink>
      </ul>
    </div>
  )
}
