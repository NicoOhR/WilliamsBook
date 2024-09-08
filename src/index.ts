import * as d3 from 'd3';

const svg = d3.select('svg')
    .attr('width', 800)
    .attr('height', 600);

svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 50)
    .attr('fill', 'blue');
