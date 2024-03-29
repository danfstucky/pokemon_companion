<template>
  <div id="locations-chart" />
</template>

<script>
import * as d3 from 'd3';
import locations from './../../../data/locations';

export default {
  emits: ['showLocationDetails'],
  data() {
    return {
      chart: null,
      townImg: require('./../../../assets/images/pokemon/town.png').default,
      routeImg: require('./../../../assets/images/pokemon/route_sign.png').default,
    };
  },
  mounted() {
    // Create SVG element for chart.
    this.chart = d3
      .select('#locations-chart')
      .append('svg')
      .attr('width', 1400)
      .attr('height', 300)
      .append('g')
      .attr('transform', 'translate(60,60)');
    this.drawHexagons(locations);
  },
  methods: {
    drawHexagons(data) {
      const that = this;
      const hexes = this.generateHexes(data);
      const radius = 50;
      const dx = radius * 2 * Math.sin(Math.PI / 3);
      const dy = radius * 1.5;
      const projection = d3.geoTransform({
        point(x, y) {
          // eslint-disable-next-line no-bitwise
          return this.stream.point((x * dx) / 2, -(y - (2 - (y & 1)) / 3) * (dy / 2));
        },
      });
      const pathGenerator = d3.geoPath().projection(projection);

      // Define background images as a pattern
      const defs = this.chart.append('defs');
      defs
        .selectAll('pattern')
        .data(data)
        .enter()
        .append('pattern')
        .attr('id', (d) => d.order)
        .attr('width', 1)
        .attr('height', 1)
        .attr('patternUnits', 'objectBoundingBox')
        .append('image')
        .attr('x', 8)
        .attr('y', 15)
        .attr('width', 70)
        .attr('height', 70)
        .attr('class', 'poke-img')
        .attr('xlink:href', (d) => {
          if (d.type === 'town') {
            return that.townImg;
          }
          return that.routeImg;
        });

      // Duplicate hexagons to add backfill
      this.chart
        .append('g')
        .attr('class', 'hexagon-bgs-group')
        .selectAll('path')
        .data(hexes.features)
        .enter()
        .append('path')
        .attr('id', (d) => `hex-bg-${d.properties.order}`)
        .attr('class', (d) => {
          return d.properties.order === 1 ? 'poke-hex-bg active-hex' : 'poke-hex-bg';
        })
        .attr('d', pathGenerator);

      // Add hexagon paths
      const hexagons = this.chart
        .append('g')
        .attr('class', 'hexagons-group')
        .selectAll('path')
        .data(hexes.features)
        .enter()
        .append('path')
        .attr('class', 'poke-hex')
        .attr('d', pathGenerator)
        .attr('id', (d) => `hex-${d.properties.order}`)
        .style('fill', (d) => `url(#${d.properties.order})`);

      // Append text and position over hexagons
      const textGroup = this.chart
        .append('g')
        .attr('class', 'location-name-text')
        .selectAll('text')
        .data(hexes.features)
        .enter();

      textGroup
        .append('text')
        .attr('id', (d) => `location-name-text-${d.properties.order}`)
        .attr('x', (d) => pathGenerator.centroid(d)[0])
        .attr('y', (d) => pathGenerator.centroid(d)[1] - radius / 2)
        .attr('text-anchor', 'middle')
        .each(function (d) {
          const words = d.properties.name.split(' ');
          const xPos = d3.select(this).attr('x');
          d3.select(this)
            .selectAll(null)
            .data(words)
            .enter()
            .append('tspan')
            .attr('dy', '1.2em')
            .attr('x', xPos)
            .text(String)
            .attr('text-anchor', 'middle');
        });
      textGroup
        .append('text')
        .attr('id', (d) => `location-order-text-${d.properties.order}`)
        .attr('class', 'location-order-text')
        .attr('x', (d) => pathGenerator.centroid(d)[0])
        .attr('y', (d) => pathGenerator.centroid(d)[1])
        .attr('text-anchor', 'middle')
        .attr('dy', -radius * (2 / 3))
        .text((d) => d.properties.order);

      // Append mouse events
      hexagons
        .on('mouseover', this.handleMouseOver)
        .on('mouseout', this.handleMouseOut)
        .on('click', this.handleMouseClick);
    },
    generateHexes(data) {
      return {
        type: 'FeatureCollection',
        features: () => data.map((hexData) => this.newHex(hexData)),
      };
    },
    newHex(d) {
      // Conversion from hex coordinates to rect
      const x = 2 * (d.x + d.y / 2.0);
      const y = 2 * d.y;
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
          order: d.order,
          name: d.name,
          type: d.type,
        },
      };
    },
    handleMouseOver(event, d) {
      const order = d.properties.order;
      d3.select(`#hex-bg-${order}`).style('fill', '#bb005c');
      d3.select(`#location-name-text-${order}`).style('fill', 'white');
      d3.select(`#location-order-text-${order}`).style('fill', 'white');
    },
    handleMouseOut(event, d) {
      const order = d.properties.order;
      d3.select(`#hex-bg-${order}`).style('fill', '#d3d3d3');
      d3.select(`#location-name-text-${order}`).style('fill', 'black');
      d3.select(`#location-order-text-${order}`).style('fill', '#bb005c');
    },
    handleMouseClick(event, d) {
      const order = d.properties.order;
      d3.select('path.active-hex').classed('active-hex', false);
      d3.select(`#hex-bg-${order}`).classed('active-hex', true);
      // The location order is also the id
      this.$emit('showLocationDetails', d.properties.order);
    },
  },
};
</script>

<style lang="scss">
// Scoping these styles causes them not to show up for the svg elements
@import url('https://fonts.googleapis.com/css?family=Acme');

#locations-chart {
  border-radius: 20px;
  overflow-x: auto;
  max-width: 980px;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230056b3' fill-opacity='0.36' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
}

svg {
  .poke-img {
    opacity: 0.4;
  }
  path.poke-hex-bg {
    fill: #d3d3d3;
  }
  path.poke-hex {
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
    font-size: 20px;
  }
  text.location-order-text {
    fill: #bb005c;
    font-size: 16px;
  }
  path.active-hex {
    fill: #ff2b5c !important;
    stroke: white !important;
    stroke-width: 5px !important;
  }
}
</style>
