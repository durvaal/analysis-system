'use strict';

const generateRandomListNumbers = (sizeList) => {
  let numbers = [];

  for (var i = 0; i <= sizeList; i++) {
		numbers.push(i);
  }

  return numbers;
}

const searchRandomElementOnList = (list) => {
	return list[Math.floor(Math.random() * list.length)];
}

const sequentialSearch = (list, element) => {
  let position = 0;
  let finded = false;
	var startTime = performance.now();

  while(position < list.length && !finded) {
    if (list[position] === element) {
      finded = true;
    } else {
      position+=1;
    }
  }

  return performance.now() - startTime;
};

const binarySearch = (list, element) => {
  let fistIndex= 0;
  let lastIndex= list.length - 1;
  let finded = false;
  let medianIndex = 0;
	var startTime = performance.now();

  while (fistIndex <= lastIndex && !finded) {
    medianIndex = Math.ceil((fistIndex + lastIndex) / 2);

    if (list[medianIndex] == element) {
      finded = true;
    } else {
      if (element < list[medianIndex]) {
        lastIndex = medianIndex - 1;
      } else {
        fistIndex = medianIndex + 1;
      }
    }
  }

  return performance.now() - startTime;
};

window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

(function(global) {
	var COLORS = [
		'#4dc9f6',
		'#f67019',
		'#f53794',
		'#537bc4',
		'#acc236',
		'#166a8f',
		'#00a950',
		'#58595b',
		'#8549ba'
	];

	var Samples = global.Samples || (global.Samples = {});
	var Color = global.Color;

	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function(seed) {
			this._seed = seed;
		},

		rand: function(min, max) {
			var seed = this._seed;
			min = min === undefined ? 0 : min;
			max = max === undefined ? 1 : max;
			this._seed = (seed * 9301 + 49297) % 233280;
			return min + (this._seed / 233280) * (max - min);
		},

		numbers: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 1;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = (from[i] || 0) + this.rand(min, max);
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor);
				} else {
					data.push(null);
				}
			}

			return data;
		},

		labels: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max - min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i = min; i < max; i += step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function(config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i = 0; i < count; ++i) {
				value = MONTHS[Math.ceil(i) % 12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		color: function(index) {
			return COLORS[index % COLORS.length];
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined ? 0.5 : 1 - opacity;
			return Color(color).alpha(alpha).rgbString();
		}
	};

	// DEPRECATED
	window.randomScalingFactor = () => {
		return Math.round(Samples.utils.rand(-100, 100));
	};

	// INITIALIZATION

	Samples.utils.srand(Date.now());

	var config = {
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
		window.myLine = new Chart(ctx, config);
	};

	document.getElementById('randomizeData').addEventListener('click', () => {
		config.data.datasets[0].data = [];
		config.data.datasets[1].data = [];
		config.data.labels = [];

		window.myLine.update();
	});

	document.getElementById('addData').addEventListener('click', () => {
		if (config.data.datasets.length > 0) {
			const generatedList = generateRandomListNumbers(1000000);
			const soughtElement = searchRandomElementOnList(generatedList);
			const totalTimeUsingSequentialSearch = sequentialSearch(generatedList, soughtElement);
			const totalTimeUsingBinarySearch = binarySearch(generatedList, soughtElement);

			config.data.labels.push(soughtElement);
			config.data.datasets[0].data.push(totalTimeUsingSequentialSearch);
			config.data.datasets[1].data.push(totalTimeUsingBinarySearch);

			window.myLine.update();
		}
	});

	document.getElementById('removeData').addEventListener('click', () => {
		config.data.labels.splice(-1, 1); // remove the label first

		config.data.datasets.forEach(function(dataset) {
			dataset.data.pop();
		});

		window.myLine.update();
	});
	
}(this));