import * as d3 from 'd3';

const RadarChart = {
  draw(chartId, data, options) {
    // Default config
    const cfg = {
      radius: 5,
      w: 600,
      h: 600,
      factor: 1,
      factorLegend: 0.85,
      levels: 3,
      maxValue: 100,
      radians: 2 * Math.PI,
      opacityArea: 0.5,
      offsetRight: 5,
      translateX: 0,
      translateY: 0,
      extraWidthX: 100,
      extraWidthY: 100,
      areaColor: '#6F257F',
      nodeColor: '#c43fe0',
    };

    if (typeof options !== 'undefined') {
      for (const i in options) {
        if (typeof options[i] !== 'undefined') {
          cfg[i] = options[i];
        }
      }
    }

    const allAxis = (data[0].map(stat => stat.area));
    const total = allAxis.length;
    const radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);
    d3.select(chartId).select('svg').remove();

    const radarGraph = d3.select(chartId)
      .append('svg')
      .attr('width', cfg.w + cfg.extraWidthX)
      .attr('height', cfg.h + cfg.extraWidthY)
      .append('g')
      .attr('transform', `translate(${cfg.translateX}, ${cfg.translateY})`);

    // Circular segments
    for (let j = 0; j < cfg.levels; j += 1) {
      const levelFactor = (cfg.factor * radius) * ((j + 1) / cfg.levels);
      radarGraph.selectAll('.levels')
        .data(allAxis)
        .enter()
        .append('svg:line')
        .attr('x1', (_, index) => levelFactor * (1 - (cfg.factor * Math.sin((index * cfg.radians) / total))))
        .attr('y1', (_, index) => levelFactor * (1 - (cfg.factor * Math.cos((index * cfg.radians) / total))))
        .attr('x2', (_, index) => levelFactor * (1 - (cfg.factor * Math.sin(((index + 1) * cfg.radians) / total))))
        .attr('y2', (_, index) => levelFactor * (1 - (cfg.factor * Math.cos(((index + 1) * cfg.radians) / total))))
        .attr('class', 'line')
        .style('stroke', 'grey')
        .style('stroke-opacity', '0.75')
        .style('stroke-width', '0.3px')
        .attr('transform', `translate(${((cfg.w / 2) - levelFactor)}, ${(cfg.h / 2) - levelFactor})`);
    }

    // Text indicating at what % each level is
    for (let j = 0; j < cfg.levels; j += 1) {
      const levelFactor = (cfg.factor * radius) * ((j + 1) / cfg.levels);
      radarGraph.selectAll('.levels')
        .data([1]) // dummy data
        .enter()
        .append('svg:text')
        .attr('x', () => levelFactor * (1 - (cfg.factor * Math.sin(0))))
        .attr('y', () => levelFactor * (1 - (cfg.factor * Math.cos(0))))
        .attr('class', 'legend')
        .style('font-family', 'sans-serif')
        .style('font-size', '10px')
        .attr('transform',
          `translate(${(((cfg.w / 2) - levelFactor) + cfg.offsetRight)}, ${((cfg.h / 2) - levelFactor)})`)
        .attr('fill', '#737373')
        .text(Math.round((j + 1) * (cfg.maxValue / cfg.levels)));
    }

    const axis = radarGraph.selectAll('.axis')
      .data(allAxis)
      .enter()
      .append('g')
      .attr('class', 'axis');

    axis.append('line')
      .attr('x1', cfg.w / 2)
      .attr('y1', cfg.h / 2)
      .attr('x2', (_, index) => (cfg.w / 2) * (1 - (cfg.factor * Math.sin((index * cfg.radians) / total))))
      .attr('y2', (_, index) => (cfg.h / 2) * (1 - (cfg.factor * Math.cos((index * cfg.radians) / total))))
      .attr('class', 'line')
      .style('stroke', 'grey')
      .style('stroke-width', '1px');

    axis.append('text')
      .attr('class', 'legend')
      .text(d => d)
      .style('font-family', 'sans-serif')
      .style('font-size', '11px')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.5em')
      .attr('transform', () => 'translate(0, -10)')
      .attr('x', (_, index) => (((cfg.w / 2) * (1 - (cfg.factorLegend * Math.sin((index * cfg.radians) / total)))) -
        (60 * Math.sin((index * cfg.radians) / total))))
      .attr('y', (_, index) => ((cfg.h / 2) * (1 - Math.cos((index * cfg.radians) / total))) -
        (20 * Math.cos((index * cfg.radians) / total)));

    const dataValues = [];
    data.forEach((y) => {
      radarGraph.selectAll('.nodes')
        .data(y, (stat, index) => {
          dataValues.push([
            (cfg.w / 2) * (1 - (((parseFloat(Math.max(stat.value, 0)) / cfg.maxValue)) *
              (cfg.factor * Math.sin((index * cfg.radians) / total)))),
            (cfg.h / 2) * (1 - (((parseFloat(Math.max(stat.value, 0)) / cfg.maxValue)) *
              (cfg.factor * Math.cos((index * cfg.radians) / total)))),
          ]);
        });
      dataValues.push(dataValues[0]);
      radarGraph.selectAll('.area')
        .data([dataValues])
        .enter()
        .append('polygon')
        .attr('class', 'radar-chart-area')
        .style('stroke-width', '2px')
        .style('stroke', cfg.areaColor)
        .attr('points', (coords) => {
          let str = '';
          for (let pti = 0; pti < coords.length; pti += 1) {
            str = `${str}${coords[pti][0]},${coords[pti][1]} `;
          }
          return str;
        })
        .style('fill', () => cfg.areaColor)
        .style('fill-opacity', cfg.opacityArea)
        .on('mouseover', function () {
          const z = `polygon.${d3.select(this).attr('class')}`;
          radarGraph.selectAll('polygon')
            .transition(200)
            .style('fill-opacity', 0.1);
          radarGraph.selectAll(z)
            .transition(200)
            .style('fill-opacity', 0.7);
        })
        .on('mouseout', () => {
          radarGraph.selectAll('polygon')
            .transition(200)
            .style('fill-opacity', cfg.opacityArea);
        });
    });

    data.forEach((y) => {
      radarGraph.selectAll('.nodes')
        .data(y).enter()
        .append('svg:circle')
        .attr('class', 'radar-chart-node')
        .attr('r', cfg.radius)
        .attr('alt', stat => Math.max(stat.value, 0))
        .attr('cx', (stat, index) => {
          dataValues.push([
            (cfg.w / 2) * (1 - (((parseFloat(Math.max(stat.value, 0)) / cfg.maxValue)) *
              (cfg.factor * Math.sin((index * cfg.radians) / total)))),
            (cfg.h / 2) * (1 - (((parseFloat(Math.max(stat.value, 0)) / cfg.maxValue)) *
              (cfg.factor * Math.cos((index * cfg.radians) / total)))),
          ]);
          return ((cfg.w / 2) * (1 - (((Math.max(stat.value, 0) / cfg.maxValue)) *
            (cfg.factor * Math.sin((index * cfg.radians) / total)))));
        })
        .attr('cy', (stat, index) => (
          (cfg.h / 2) * (1 - (((Math.max(stat.value, 0) / cfg.maxValue)) *
          (cfg.factor * Math.cos((index * cfg.radians) / total))))
        ))
        .attr('data-id', stat => stat.area)
        .style('fill', '#fff')
        .style('stroke-width', '2px')
        .style('stroke', cfg.areaColor)
        .style('fill-opacity', 0.9)
        .on('mouseover', function () {
          d3.select(this)
            .style('fill', cfg.nodeColor)
            .style('stroke-width', '3px');
        })
        .on('mouseout', function () {
          d3.select(this)
            .style('fill', '#fff')
            .style('stroke-width', '2px');
        })
        .append('svg:title')
        .text(stat => Math.max(stat.value, 0));
    });

    // Tooltip
    radarGraph.append('text')
      .style('opacity', 0)
      .style('font-family', 'sans-serif')
      .style('font-size', '13px');
  },
};

export default RadarChart;
