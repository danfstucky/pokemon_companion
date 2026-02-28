import { Outlet } from 'react-router-dom'
import PokemonTabs from './PokemonTabs'
import styles from './PokemonHome.module.scss'

export default function PokemonHome() {
  return (
    <div className={styles.pokemonContainer}>
      <PokemonTabs />
      <Outlet />
    </div>
  )
}
