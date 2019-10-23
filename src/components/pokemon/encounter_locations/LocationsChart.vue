<template>
  <div id='locations-chart'>
    <div class='location-1'>
      <!-- <img src="./../../../assets/location_hexagons/salmon_town.png"> -->
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    const data = [
      { x: 0, y: 0, order: 1, name: 'Salmon Town', type: 'CITY' },
      { x: 1.2, y: -1.2, order: 2, name: 'Route 1', type: 'ROUTE' },
      { x: 1.2, y: 0, order: 3, name: 'Neeromp Farm', type: 'CITY' },
      { x: 2.4, y: -1.2, order: 4, name: 'Route 5', type: 'ROUTE' },
    ];

    // Create SVG element for chart.
    const chartDiv = document.getElementById('locations-chart');
    this.chart = d3.select('#locations-chart')
      .append('svg')
      .attr('width', chartDiv.clientWidth)
      .attr('height', 300)
      .append('g')
      .attr('transform', 'translate(60,60)');
    this.drawHexagons(data);
  },
  methods: {
    drawHexagons(data) {
      const hexes = this.generateHexes(data);
      const radius = 50;
      const dx = radius * 2 * Math.sin(Math.PI / 3);
      const dy = radius * 1.5;
      const projection = d3.geoTransform({
        point: function (x, y) {
          // eslint-disable-next-line no-bitwise
          return this.stream.point((x * dx) / 2, -(y - ((2 - (y & 1)) / 3)) * (dy / 2));
        },
      });
      const pathGenerator = d3.geoPath().projection(projection);

      // Define background images as a pattern
      const defs = this.chart.append('defs');
      var imgPattern = defs
      .append('pattern')
          .attr('id', 1)
          .attr('width', 1)
          .attr('height', 1)
          .attr('patternUnits', 'objectBoundingBox')
        .append('image')
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', 80) // 100x100 dims with 100x100 image seems to work best
          .attr('height', 80)
          .attr('xlink:href', function(d) {
            return 'http://lorempixel.com/80/80/people/';
          })
      
      // Duplicate hexagons to add backfill
      const hexGroups1 = this.chart.append('g')
        .selectAll('path')
        .data(hexes.features)
        .enter()
        .append('path')
        .attr('class', 'poke-hex-bg')
        .attr('d', pathGenerator);

      const hexGroups = this.chart.append('g')
        .selectAll('path')
        .data(hexes.features)
        .enter()
        .append('path')
        .attr('class', 'poke-hex')
        .attr('d', pathGenerator)
        .style('fill', 'url(#1)');

      const textGroups = this.chart.append('g')
        .selectAll('labels')
        .data(hexes.features)
        .enter()
        .append('text')
        .attr('x', function(d) { return pathGenerator.centroid(d)[0]; })
        .attr('y', function(d) { return pathGenerator.centroid(d)[1]; })
        .text(function(d) { return d.properties.name; })
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'central');

      // hexGroups.on('mouseover', function(d) {
      //   d3.select(this).style('fill', 'blue');
      // })
      // ===================================================
    },
    xPos(d, hexRadius) {
      return (d.properties.rectCoords.x * hexRadius) - hexRadius;
    },
    generateHexes(data) {
      return {
        type: 'FeatureCollection',
        features: () => data.map(hexData => this.newHex(hexData)),
      };
    },
    newHex(d) {
      // Conversion from hex coordinates to rect
      const x = 2 * (d.x + (d.y / 2.0));
      const y = 2 * d.y;
      const center = {x: x, y: y + 0.5}
      return {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [x, y + 2], // top point
              [x + 1, y + 1],
              [x + 1, y],
              [x, y - 1], // bottom point
              [x - 1, y],
              [x - 1, y + 1],
              [x, y + 2],
            ],
          ],
        },
        properties: {
          rectCoords: center,
          order: d.order,
          name: d.name,
          type: d.type,
        },
      };
    },
  },
};
</script>

<style lang='less'>
// Scoping these styles causes them not to show up for the svg elements
 @import (css) url('https://fonts.googleapis.com/css?family=Acme');

  svg {
    path.poke-hex-bg {
      fill: #ecebeb;
    }
    path.poke-hex {
      opacity: 0.5;
      stroke: #bb005c;
      stroke-width: 2px;
      &:hover {
        cursor: pointer;
        fill: #bb005c;
        stroke: white;
        stroke-width: 5px;
      }
    }
    text {
      pointer-events: none;
      font-family: 'Acme', arial;
      font-size: 16px;
    }
  }
</style>
