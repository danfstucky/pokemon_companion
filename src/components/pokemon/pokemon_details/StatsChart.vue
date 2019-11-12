// d3 radar chart for Pokemon stats.
<template>
  <div id='poke-stats-chart'></div>
</template>

<script>
import * as d3 from 'd3';
import RadarChart from './RadarChart';

export default {
  props: {
    statsData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    // Create SVG element for chart.
    this.chart = d3.select('#poke-stats-chart')
      .append('svg');
    this.drawRadarChart();
  },
  methods: {
    drawRadarChart() {
      // Config for the Radar chart
      const config = {
        w: 150,
        h: 150,
        maxValue: 165,
        levels: 3,
        extraWidthX: 200,
        extraWidthY: 80,
        translateX: 90,
        translateY: 25,
      };
      RadarChart.draw('#poke-stats-chart', this.formatBaseStats(), config);
    },
    formatBaseStats() {
      const graphData = this.statsData.map((stat) => {
        let statName = stat.stat.name;
        statName = statName.charAt(0).toUpperCase() + statName.slice(1);
        return { area: statName, value: stat.base_stat };
      });
      return [graphData];
    },
  },
};
</script>

<style lang='less'>
// Scoping these styles causes them not to show up for the svg elements
 @import (css) url('https://fonts.googleapis.com/css?family=Acme');

</style>
