import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import './HorizontalBarChart.scss';

const defaultConfig = {
  chartId: 'bar-chart',
  maxValue: null,
  rowHeight: 34,
  barHeight: 10,
  labelWidth: 118,
  valueWidth: 44,
};

// Bars are drawn in the theme accent (via CSS) so they follow light/dark mode.
// A datum's optional `color` is shown as a small identity dot beside its label.
export default function HorizontalBarChart({ data, chartOptions = {} }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    setWidth(el.clientWidth);
    if (typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!width) return undefined;
    const config = { ...defaultConfig, ...chartOptions };
    const container = d3.select(containerRef.current);
    const chartHeight = config.rowHeight * data.length;
    const maxValue = config.maxValue || d3.max(data, (d) => d.score);
    const trackWidth = Math.max(width - config.labelWidth - config.valueWidth, 40);

    const xScale = d3.scaleLinear().domain([0, maxValue]).range([0, trackWidth]);
    const yScale = d3
      .scaleBand()
      .domain(data.map((d) => d.text))
      .range([0, chartHeight]);

    const svg = container
      .append('svg')
      .attr('width', width)
      .attr('height', chartHeight)
      .attr('class', 'bar-chart-svg')
      .attr('role', 'img')
      .attr('aria-label', data.map((d) => `${d.text}: ${d.score} of ${maxValue}`).join(', '));

    const rows = svg
      .selectAll('g.bar-row')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'bar-row')
      .attr('transform', (d) => `translate(0,${yScale(d.text)})`);

    // Full-row hit target so hover is forgiving
    rows.append('rect').attr('class', 'bar-hit').attr('width', width).attr('height', config.rowHeight);

    rows.append('title').text((d) => `${d.text}: ${d.score} / ${maxValue}`);

    const midY = config.rowHeight / 2;

    rows
      .filter((d) => d.color)
      .append('circle')
      .attr('class', 'bar-dot')
      .attr('cx', 5)
      .attr('cy', midY)
      .attr('r', 4)
      .style('fill', (d) => d.color);

    rows
      .append('text')
      .attr('class', 'bar-label')
      .attr('x', 18)
      .attr('y', midY)
      .attr('dy', '0.35em')
      .text((d) => d.text);

    const barY = midY - config.barHeight / 2;
    const radius = config.barHeight / 2;

    rows
      .append('rect')
      .attr('class', 'bar-track')
      .attr('x', config.labelWidth)
      .attr('y', barY)
      .attr('width', trackWidth)
      .attr('height', config.barHeight)
      .attr('rx', radius);

    rows
      .append('rect')
      .attr('class', 'bar')
      .attr('x', config.labelWidth)
      .attr('y', barY)
      .attr('width', (d) => Math.max(xScale(d.score), config.barHeight))
      .attr('height', config.barHeight)
      .attr('rx', radius);

    rows
      .append('text')
      .attr('class', 'bar-value')
      .attr('x', width)
      .attr('y', midY)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'end')
      .text((d) => `${d.score}/${maxValue}`);

    return () => {
      container.selectAll('*').remove();
    };
  }, [data, width]);

  return <div ref={containerRef} id={chartOptions.chartId} className="bar-chart" />;
}
