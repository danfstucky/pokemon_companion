import { useState } from 'react';
import { usePokemonStore } from '../../../stores/pokemon';
import gymLeaders from '../../../data/gym_leaders';
import PokemonDetail from '../pokemon_details/PokemonDetail';
import styles from './PokemonGyms.module.scss';

const images = import.meta.glob('../../../assets/images/pokemon/gym_info/*', { eager: true, import: 'default' });

const pokeImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function getImgUrl(pic) {
  return images[`../../../assets/images/pokemon/gym_info/${pic}`];
}

export default function PokemonGyms() {
  const showDetail = usePokemonStore((s) => s.showDetail);
  const pokemonEntryId = usePokemonStore((s) => s.pokemonEntryId);
  const showEncounterDetails = usePokemonStore((s) => s.showEncounterDetails);
  const [selectedGymId, setSelectedGymId] = useState(null);
  const [gymLeader, setGymLeader] = useState(null);

  function handleGymSelection(gymNum) {
    setSelectedGymId(gymNum);
    setGymLeader(gymLeaders.find((gym) => gym.id === gymNum));
  }

  return (
    <div className={styles.gymsContainer}>
      <div className={styles.gymLeadersWrapper}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((gymNum) => (
          <img
            key={gymNum}
            className={`${styles.gymLeader}${selectedGymId === gymNum ? ` ${styles.highlight}` : ''}`}
            src={getImgUrl(`gym${gymNum}.png`)}
            alt={`Gym ${gymNum}`}
            onClick={() => handleGymSelection(gymNum)}
          />
        ))}
      </div>

      {selectedGymId && (
        <div>
          <img className={styles.gymCity} src={getImgUrl(`city${selectedGymId}.png`)} alt={`City ${selectedGymId}`} />
          <p className={styles.disclaimer}>Note: In-game graphics do not have gridlines</p>
        </div>
      )}

      {gymLeader && (
        <div className={styles.gymDetails}>
          {gymLeader.description}
          {gymLeader.leaders.map((leader) => (
            <div key={leader.name} className={styles.gymLeaderDetails}>
              <table>
                <tbody>
                  <tr>
                    <td className={styles.label}>Leader:</td>
                    <td>{leader.name}</td>
                  </tr>
                  <tr>
                    <td className={styles.label}>Type:</td>
                    <td>{leader.type}</td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.gymLeaderPokemon}>
                {leader.pokemon.map((pokemon, index) => (
                  <article key={`poke${index}`} onClick={() => showEncounterDetails(pokemon)}>
                    <h6 className={styles.pokedexNum}>{pokemon.id}</h6>
                    <img src={pokeImageUrl + pokemon.id + '.png'} width="96" height="96" alt="" />
                    <h5>{pokemon.name}</h5>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {showDetail && <PokemonDetail pokemonId={pokemonEntryId} isWildEncounter={false} />}
    </div>
  );
}
