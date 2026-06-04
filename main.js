// Import libraries
import Chart from 'chart.js/auto'
// main.js — bootstraps libraries for inline scripts
import * as LightweightCharts from 'lightweight-charts'

// Expose to global scope for inline scripts
window.Chart = Chart
window.LightweightCharts = LightweightCharts

console.log('✓ Trading Dashboard initialized')
console.log('✓ Chart.js loaded')
console.log('✓ lightweight-charts loaded')

import { createChart, LineSeries } from 'lightweight-charts';

const chart = createChart(document.body, { width: 400, height: 300 });
const lineSeries = chart.addSeries(LineSeries);
lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);

