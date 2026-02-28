import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import locations from '../../../data/locations';
import townImg from '../../../assets/images/pokemon/town.png';
import routeImg from '../../../assets/images/pokemon/route_sign.png';
import './LocationsChart.scss';

export default function LocationsChart({ onShowLocationDetails }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const chart = d3
      .select(containerRef.current)
      .append('svg')
      .attr('width', 1400)
      .attr('height', 300)
      .append('g')
      .attr('transform', 'translate(60,60)');

    drawHexagons(chart, locations);

    return () => {
      d3.select(containerRef.current).selectAll('*').remove();
    };
  }, []);

  function generateHexes(data) {
    return {
      type: 'FeatureCollection',
      features: data.map((hexData) => newHex(hexData)),
    };
  }

  function newHex(d) {
    const x = 2 * (d.x + d.y / 2.0);
    const y = 2 * d.y;
    return {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [x, y + 2],
            [x + 1, y + 1],
            [x + 1, y],
            [x, y - 1],
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
  }

  function drawHexagons(chart, data) {
    const hexes = generateHexes(data);
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

    const defs = chart.append('defs');
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
          return townImg;
        }
        return routeImg;
      });

    chart
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

    const hexagons = chart
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

    const textGroup = chart
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

    hexagons
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut)
      .on('click', (event, d) => handleMouseClick(event, d));
  }

  function handleMouseOver(event, d) {
    const order = d.properties.order;
    d3.select(`#hex-bg-${order}`).style('fill', '#bb005c');
    d3.select(`#location-name-text-${order}`).style('fill', 'white');
    d3.select(`#location-order-text-${order}`).style('fill', 'white');
  }

  function handleMouseOut(event, d) {
    const order = d.properties.order;
    d3.select(`#hex-bg-${order}`).style('fill', '#d3d3d3');
    d3.select(`#location-name-text-${order}`).style('fill', 'black');
    d3.select(`#location-order-text-${order}`).style('fill', '#bb005c');
  }

  function handleMouseClick(event, d) {
    const order = d.properties.order;
    d3.select('path.active-hex').classed('active-hex', false);
    d3.select(`#hex-bg-${order}`).classed('active-hex', true);
    onShowLocationDetails(order);
  }

  return <div id="locations-chart" ref={containerRef} />;
}
