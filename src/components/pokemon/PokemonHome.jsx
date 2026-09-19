import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { usePokemonStore } from '../../stores/pokemon';
import PokemonTabs from './PokemonTabs';
import styles from './PokemonHome.module.scss';

export default function PokemonHome() {
  const { pathname } = useLocation();
  const closeDetails = usePokemonStore((s) => s.closeDetails);

  // The detail modal's open state is global, so without this it survives the back button and
  // reappears on whichever Pokemon page is shown next.
  useEffect(() => closeDetails(), [pathname, closeDetails]);

  return (
    <div className={styles.pokemonContainer}>
      <PokemonTabs />
      <Outlet />
    </div>
  );
}
