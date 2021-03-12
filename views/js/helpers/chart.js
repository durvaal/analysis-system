'use strict';

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
			label: 'Sequential Search',
			backgroundColor: window.chartColors.red,
			borderColor: window.chartColors.red,
			data: [],
			fill: false,
		}, {
			label: 'Binary Search',
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
			text: ['Algorithm Analysis System', 'Size list: 1.000.000 (from 0 to 1.000.000)']
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