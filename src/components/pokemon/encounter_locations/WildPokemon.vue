<template>
  <div>
    <p>Wild Pokemon</p>
    <LocationsChart @showLocationDetails="loadLocation($event)"></LocationsChart>
    <EncounterDetailsWrapper
      v-if="encounterDetails"
      :encounter="encounterDetails">
    </EncounterDetailsWrapper>
    <PokemonDetail
      v-if="showPokemonDetails"
      :pokemonId="pokemonId" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LocationsChart from './LocationsChart';
import EncounterDetailsWrapper from './EncounterDetailsWrapper';
import encounters from './../../../data/encounters';
import PokemonDetail from './../PokemonDetail';

export default {
  components: {
    LocationsChart,
    EncounterDetailsWrapper,
    PokemonDetail,
  },
  data() {
    return {
      encounterDetails: null,
    };
  },
  computed: {
    ...mapGetters([
      'showPokemonDetails',
      'pokemonId',
    ]),
  },
  methods: {
    loadLocation(locationId) {
      const location = encounters.find(loc => loc.id === locationId);
      this.encounterDetails = location;
    },
  },
};
</script>
