import { useState } from 'react';
import { usePokemonStore } from '../../../stores/pokemon';
import LocationsChart from './LocationsChart';
import EncounterDetailsWrapper from './EncounterDetailsWrapper';
import PokemonDetail from '../pokemon_details/PokemonDetail';
import encounters from '../../../data/encounters';

export default function WildPokemon() {
  const showDetail = usePokemonStore((s) => s.showDetail);
  const pokemonEntryId = usePokemonStore((s) => s.pokemonEntryId);
  const [encounterDetails, setEncounterDetails] = useState(encounters[0]);

  function loadLocation(locationId) {
    const location = encounters.find((loc) => loc.id === locationId);
    setEncounterDetails(location);
  }

  return (
    <div className="wild-pokemon">
      <LocationsChart onShowLocationDetails={loadLocation} />
      {encounterDetails && <EncounterDetailsWrapper encounter={encounterDetails} />}
      {showDetail && <PokemonDetail pokemonId={pokemonEntryId} isWildEncounter={true} />}
    </div>
  );
}
