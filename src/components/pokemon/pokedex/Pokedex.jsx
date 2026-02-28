import { usePokemonStore } from '../../../stores/pokemon';
import PokemonSearch from './PokemonSearch';
import PokemonList from './PokemonList';
import PokemonDetail from '../pokemon_details/PokemonDetail';
import styles from './Pokedex.module.scss';

export default function Pokedex() {
  const showDetail = usePokemonStore((s) => s.showDetail);
  const pokemonEntryId = usePokemonStore((s) => s.pokemonEntryId);

  return (
    <div className={styles.pokedexContainer}>
      <h1>Salmon Red Pokedex</h1>
      <PokemonSearch />
      <PokemonList />
      {showDetail && <PokemonDetail pokemonId={pokemonEntryId} />}
    </div>
  );
}
