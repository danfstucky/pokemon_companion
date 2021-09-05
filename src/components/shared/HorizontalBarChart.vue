<template>
  <div :id="chartOptions.chartId || defaultConfig.chartId" />
</template>

<script>
import * as d3 from 'd3';

export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      chart: null,
      defaultConfig: {
        chartId: 'bar-chart',
        chartWidth: 300,
        barHeight: 40,
        barPadding: 4,
        leftMargin: 100,
        style: {
          barColor: 'steelblue',
          barHoverColor: 'blue',
        },
      },
    };
  },
  mounted() {
    const config = {...this.defaultConfig, ...this.chartOptions};
    this.drawSkillChart(config);
  },
  methods: {
    drawSkillChart(config) {
      const chartHeight = config.barHeight * this.data.length;
      const chartWidth = config.chartWidth;
      let maxScore = d3.max(this.data, function(d) { return d.score; });

      // Create Scales
      const xScale = d3.scaleLinear()
        .domain([0, maxScore])
        .range([0, chartWidth - config.leftMargin]);

      const yScale = d3.scaleBand()
        .domain(this.data.map(function(d) { return d.text; }))
        .rangeRound([0, chartHeight]);
      
      // Create y-axis
      const yAxis = d3.axisLeft(yScale)
        .tickSizeInner(0)
        .tickSizeOuter(0)
        .tickPadding(10);

      // Create SVG element for chart.
      this.chart = d3.select(`#${config.chartId}`)
        .append('svg')
          .attr('width', chartWidth)
          .attr('height', chartHeight)
          .attr('class', 'bar-chart-svg')
        .append('g')
          .attr('transform', `translate(${config.leftMargin},0)`);

      const rowGroups = this.chart.selectAll('g.tech-row-group')
        .data(this.data)
        .enter().append('g')
          .attr('class', 'tech-row-group');

      rowGroups.append('rect')
        .attr('x', 0)
        .attr('y', function(d) { return yScale(d.text); })
        .attr('width', function(d) { return xScale(d.score); })
        .attr('height', config.barHeight - config.barPadding)
        .style('fill', config.style.barColor);

      rowGroups.selectAll('rect')
        .on('mouseover', function () {
          d3.select(this)
            .style('fill', config.style.barHoverColor);
        })
        .on('mouseout', function () {
          d3.select(this)
            .style('fill', config.style.barColor);
        });

      // Append axes to chart
      this.chart.append('g')
        .attr('class', 'axis y')
        .attr('transform', 'translate(0,0)')
        .call(yAxis);
    },
  },
};
</script>

<style lang='scss'>
  svg.bar-chart-svg {
    .axis {
      text {
        font-size: 16px;
        padding-right: 10px;
      }
      path {
        display: none;
      }
    }
  }
</style>
