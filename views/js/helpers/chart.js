'use strict';

// SEARCH OR SORT, init search by default
var ANALYSIS_TYPES = 'SEARCH';

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

var chartConfig = {
	type: 'line',
	data: {
		labels: [],
		datasets: [{
			label: ANALYSIS_TYPES === 'SEARCH' ? 'Sequential Search' : 'Bubble Sort',
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			data: [],
			fill: false,
		}, {
			label: ANALYSIS_TYPES === 'SEARCH' ? 'Binary Search' : 'Selection Sort',
			fill: false,
			backgroundColor: window.chartColors.blue,
			borderColor: window.chartColors.blue,
			data: [],
		}]
	},
	options: {
		responsive: true,
		title: {
			display: true,
			text: [
				ANALYSIS_TYPES === 'SEARCH' ? 'Algorithm Search Analysis' : 'Algorithm Sort Analysis',
				ANALYSIS_TYPES === 'SEARCH' ? 'Size list: 1.000.000 (from 0 to 1.000.000)' : 'Size list: defined by the user just below in the form',
			]
		},
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'N'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Time (milliseconds)'
				}
			}]
		}
	}
};

window.onload = () => {
	var ctx = document.getElementById('analysisChart').getContext('2d');
	window.myLine = new Chart(ctx, chartConfig);
};