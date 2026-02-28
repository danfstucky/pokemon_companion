import { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import RadarChart from './RadarChart';

export default function StatsChart({ statsData }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !statsData) return;

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

    const graphData = statsData.map((stat) => {
      let statName = stat.stat.name;
      statName = statName.charAt(0).toUpperCase() + statName.slice(1);
      return { area: statName, value: stat.base_stat };
    });

    RadarChart.draw(containerRef.current, [graphData], config);

    return () => {
      d3.select(containerRef.current).selectAll('*').remove();
    };
  }, [statsData]);

  return <div ref={containerRef} />;
}
