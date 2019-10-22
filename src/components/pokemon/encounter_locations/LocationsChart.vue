<template>
  <div id="locations-chart">
    <div class="location-1">
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
      { x: 0, y: 0, z: 0, order: 1, name: 'Salmon Town', type: 'CITY' },
      { x: 1.2, y: 0, z: -1.2, order: 2, name: 'Route 1', type: 'ROUTE' },
      { x: 1.2, y: -10, z: 0, order: 3, name: 'Neeromp Farm', type: 'CITY' },
      { x: 2.4, y: -1, z: -1.2, order: 4, name: 'Route 5', type: 'ROUTE' },
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

      const hexGroups = this.chart.selectAll('g.hex-group')
        .data(hexes.features)
        .enter().append('g')
        .attr('class', 'hex-group');

      // Attach the hexagon
      hexGroups.append('path')
        .attr('class', 'hex')
        .style('fill', 'white')
        .attr('d', pathGenerator);

      // There is a problem with how data is being generated and passed to this.
      hexGroups.append('text')
        .attr('x', function(d,i) { return (d.properties.rectCoords.x * radius) - radius; }) // x = i*100
        .attr('y', function(d) { return d.properties.rectCoords.y * -radius; }) // top row y = 0
        .text(function(d) { return d.properties.name;} );
       
        

      // const text = hexGroups.append("text")
      //   .selectAll("tspan")
      //   .data(d => { return d.properties.name.split(/(?=[A-Z][^A-Z])/g) })
      //   .join("tspan")
      //     .attr('x', function(d, i) { return 0; })
      //     .attr('y', (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
      //     .text(function(d) { return d;} );

        
      // Prints all text in one spot
      // hexGroups.selectAll('text')
      //   .data(data)
      //   .enter()
      //   .append('text')
      //   .text(function(d) { return d.name; })
      //   .attr('x', function(d,i) { return d.x * radius})
      //   .attr('y', function(d, i) { return (i%2 == 0 ? 0 : 1*100) })
    },
    generateHexes(data) {
      return {
        type: 'FeatureCollection',
        features: () => data.map(hexData => this.newHex(hexData)),
      };
    },
    newHex(d) {
      // Conversion from hex coordinates to rect
      const x = 2 * (d.x + (d.z / 2.0));
      const y = 2 * d.z;
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
