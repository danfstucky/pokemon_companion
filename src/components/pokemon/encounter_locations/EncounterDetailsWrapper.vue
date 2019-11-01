<template>
  <div class="terrain-wrapper">
    <template v-for="encounterLocation in encounter.encounters">
      <div class="row terrain-block">
        <div :class="['col-1', 'terrain-sidebar', `terrain-${encounterLocation.terrain.toLowerCase()}`]"><span>{{ encounterLocation.terrain }}</span></div>
        <EncounterDetails class="col-11" 
          :encounterLocation="encounterLocation">
        </EncounterDetails>
      </div>
    </template>
  </div>
</template>

<script>
import EncounterDetails from './EncounterDetails';

export default {
  components: {
    EncounterDetails,
  },
  props: {
    encounter: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
  .terrain-wrapper {
    display: inline-block;
  }
  .terrain-sidebar {
    margin: -23px 0px -23px -23px;
    border-radius: 20px;
    border: white solid 3px;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    text-align: center;
    vertical-align: middle;
    font-size: 26px;
    color: white;
  }
  .terrain-block {
    background-color: #d3d3d3;
    padding: 20px;
    margin: 10px;
    border: white solid 3px;
    box-shadow: 5px 5px 4px;
    border-radius: 25px;
  }
  .terrain-land {
    background-color: rgb(32, 184, 32);
  }
  .terrain-water {
    background-color: rgb(2, 78, 192);
  }
  .terrain-fishing {
    background-color: rgb(128, 178, 253);
  }
  .terrain-cave {
    background-color: #b5651d;
  }
</style>
