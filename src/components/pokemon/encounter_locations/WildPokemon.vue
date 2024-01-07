<template>
  <div class="wild-pokemon">
    <LocationsChart @showLocationDetails="loadLocation($event)" />
    <EncounterDetailsWrapper
      v-if="encounterDetails"
      :encounter="encounterDetails"
    />
    <PokemonDetail
      v-if="pokemonStore.showPokemonDetails"
      :pokemon-id="pokemonStore.pokemonId"
      :is-wild-encounter="true"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePokemonStore } from "../../../stores/pokemon";
import LocationsChart from "./LocationsChart";
import EncounterDetailsWrapper from "./EncounterDetailsWrapper";
import encounters from "./../../../data/encounters";
import PokemonDetail from "./../pokemon_details/PokemonDetail";

const pokemonStore = usePokemonStore();
let encounterDetails = ref(encounters[0]);

function loadLocation(locationId) {
  const location = encounters.find((loc) => loc.id === locationId);
  encounterDetails.value = location;
}
</script>

<style lang="scss" scoped></style>
