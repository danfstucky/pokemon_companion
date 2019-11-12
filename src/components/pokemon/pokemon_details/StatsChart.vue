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
        w: 140,
        h: 140,
        maxValue: 180,
        extraWidthX: 200,
        extraWidthY: 80,
        translateX: 90,
        translateY: 25,
        areaColor: '#07a83f',
        nodeColor: '#73ffa3',
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
