import React from 'react';
import Plot from 'react-plotly.js';

function PlotlyChart() {
    return (
        <Plot
            data={[
                {
                    x: [1, 2, 3, 4, 5],
                    y: [2, 3, 5, 4, 6],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: { color: 'red' },
                },
            ]}
            layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
        />
    );
}

export default PlotlyChart;
