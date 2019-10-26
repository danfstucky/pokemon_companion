<template>
  <div>
    <p>Wild Pokemon</p>
    <LocationsChart @showLocationDetails="loadLocation($event)"></LocationsChart>
    <EncounterDetails v-if="encounterDetails" :encounter="encounterDetails"></EncounterDetails>
  </div>
</template>

<script>
import LocationsChart from './LocationsChart';
import EncounterDetails from './EncounterDetails';
import encounters from './../../../data/encounters';

export default {
  components: {
    LocationsChart,
    EncounterDetails,
  },
  data() {
    return {
      encounterDetails: null,
    };
  },
  methods: {
    loadLocation(locationId) {
      const location = encounters.find(loc => loc.id === locationId);
      this.encounterDetails = location;
    },
  },
};
</script>
