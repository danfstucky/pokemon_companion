import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './HorizontalBarChart.scss';

const defaultConfig = {
  chartId: 'bar-chart',
  chartWidth: 300,
  barHeight: 40,
  barPadding: 4,
  leftMargin: 100,
  style: {
    barColor: 'steelblue',
    barHoverColor: 'blue',
  },
};

export default function HorizontalBarChart({ data, chartOptions = {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const config = {
      ...defaultConfig,
      ...chartOptions,
      style: { ...defaultConfig.style, ...(chartOptions.style || {}) },
    };
    const chartHeight = config.barHeight * data.length;
    const chartWidth = config.chartWidth;
    const maxScore = d3.max(data, (d) => d.score);

    const xScale = d3
      .scaleLinear()
      .domain([0, maxScore])
      .range([0, chartWidth - config.leftMargin]);

    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.text))
      .rangeRound([0, chartHeight]);

    const yAxis = d3.axisLeft(yScale).tickSizeInner(0).tickSizeOuter(0).tickPadding(10);

    const chart = d3
      .select(containerRef.current)
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight)
      .attr('class', 'bar-chart-svg')
      .append('g')
      .attr('transform', `translate(${config.leftMargin},0)`);

    const rowGroups = chart
      .selectAll('g.tech-row-group')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'tech-row-group');

    rowGroups
      .append('rect')
      .attr('x', 0)
      .attr('y', (d) => yScale(d.text))
      .attr('width', (d) => xScale(d.score))
      .attr('height', config.barHeight - config.barPadding)
      .style('fill', config.style.barColor);

    rowGroups
      .selectAll('rect')
      .on('mouseover', function () {
        d3.select(this).style('fill', config.style.barHoverColor);
      })
      .on('mouseout', function () {
        d3.select(this).style('fill', config.style.barColor);
      });

    chart.append('g').attr('class', 'axis y').attr('transform', 'translate(0,0)').call(yAxis);

    return () => {
      d3.select(containerRef.current).selectAll('*').remove();
    };
  }, [data]);

  return <div ref={containerRef} />;
}
