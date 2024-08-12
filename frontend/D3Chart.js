import React, { useEffect } from 'react';
import * as d3 from 'd3';

function D3Chart() {
    useEffect(() => {
        const data = [10, 15, 20, 25, 30];

        const svg = d3.select('svg');
        const width = svg.attr('width');
        const height = svg.attr('height');

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 60)
            .attr('y', (d) => height - d * 10)
            .attr('width', 50)
            .attr('height', (d) => d * 10)
            .attr('fill', 'teal');
    }, []);

    return <svg width="300" height="200"></svg>;
}

export default D3Chart;
