<template>
  <div class="wild-pokemon">
    <LocationsChart @showLocationDetails="loadLocation($event)"></LocationsChart>
    <EncounterDetailsWrapper
      v-if="encounterDetails"
      :encounter="encounterDetails">
    </EncounterDetailsWrapper>
    <PokemonDetail
      v-if="showPokemonDetails"
      :pokemonId="pokemonId"
      :isWildEncounter="true" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LocationsChart from './LocationsChart';
import EncounterDetailsWrapper from './EncounterDetailsWrapper';
import encounters from './../../../data/encounters';
import PokemonDetail from './../pokemon_details/PokemonDetail';

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

<style lang="less" scoped>
  .wild-pokemon {
    text-align: center;
  }
</style>
