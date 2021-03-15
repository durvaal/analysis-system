'use strict';

const getSearchAnalysis = () => {
  return $.getJSON('analysis/search/sequential-binary').then(analysis => {
    return analysis;
  });
}

const getSortAnalysis = (list) => {
  return $.getJSON(`analysis/sort/bubble-selection?list=${list}`).then(analysis => {
    return analysis;
  });
}

const updateChart = () => {
  window.myLine.update();
};

const resetChart = () => {
  chartConfig.data.datasets[0].data = [];
  chartConfig.data.datasets[1].data = [];
  chartConfig.data.labels = [];
}

const resetChartData = () => {
  document.getElementById('resetAllData').addEventListener('click', () => {
    resetChart();
    updateChart();
  });
}

const addChartData = () => {
  document.getElementById('addNewData').addEventListener('click', async () => {
    if (chartConfig.data.datasets.length > 0) {
      if (ANALYSIS_TYPES === 'SEARCH') {
        // Get data analysis from backend
        const {
          soughtElement,
          totalTimeUsingSequentialSearch,
          totalTimeUsingBinarySearch,
        } = await getSearchAnalysis();

        // Push data analysis into Chart
        chartConfig.data.labels.push(soughtElement);
        chartConfig.data.datasets[0].data.push(totalTimeUsingSequentialSearch);
        chartConfig.data.datasets[1].data.push(totalTimeUsingBinarySearch);
      }

      if (ANALYSIS_TYPES === 'SORT') {
        // Open prompt to get list values
        const inputedList = prompt("Please insert your list. Separate the items by commas, such as: 3, 1, 2:");
          if (inputedList) {
          // Get data analysis from backend
          const {
            list,
            totalTimeUsingBubbleSort,
            totalTimeUsingSelectionSort,
          } = await getSortAnalysis(inputedList);

          // Push data analysis into Chart
          chartConfig.data.labels.push(`[${list.join(',')}]`);
          chartConfig.data.datasets[0].data.push(totalTimeUsingBubbleSort);
          chartConfig.data.datasets[1].data.push(totalTimeUsingSelectionSort);
        }
      }

      updateChart();
    }
  });
}

const removeChartData = () => {
  document.getElementById('removeLastData').addEventListener('click', () => {
    chartConfig.data.labels.splice(-1, 1); // remove the label first

    chartConfig.data.datasets.forEach(function(dataset) {
      dataset.data.pop();
    });

    updateChart();
  });
}

const orderChartData = () => {
  document.getElementById('sortAllData').addEventListener('click', async () => {
    if (chartConfig.data.datasets.length > 0) {
      let labelsOrdered = Object.assign([], chartConfig.data.labels);
      let sequentialSearchData = [];
      let binarySearchData = [];
      labelsOrdered.sort((a, b) => {
        return a - b;
      });

      for (let index = 0; index < labelsOrdered.length; index++) {
        const indexOrdered = chartConfig.data.labels.indexOf(labelsOrdered[index]);
        sequentialSearchData.push(chartConfig.data.datasets[0].data[indexOrdered]);
        binarySearchData.push(chartConfig.data.datasets[1].data[indexOrdered]);
      }

      chartConfig.data.labels = labelsOrdered;
      chartConfig.data.datasets[0].data = sequentialSearchData;
      chartConfig.data.datasets[1].data = binarySearchData;
      updateChart();
    }
  });
}

const selectAnalysisType = () => {
  document.getElementById('searchAnalysis').addEventListener('click', () => {
    ANALYSIS_TYPES = 'SEARCH';
    chartConfig.data.datasets[0].label = 'Sequential Search';
    chartConfig.data.datasets[1].label = 'Binary Search';
    chartConfig.options.title.text = ['Algorithm Search Analysis', 'Size list: 1.000.000 (from 0 to 1.000.000)'];
    resetChart();
    updateChart();
    document.getElementById('sortAllData').style.display = 'block';
    document.getElementById('searchAnalysis').classList.add('selected');
    document.getElementById('sortAnalysis').classList.remove('selected');
  });
  document.getElementById('sortAnalysis').addEventListener('click', () => {
    ANALYSIS_TYPES = 'SORT';
    chartConfig.data.datasets[0].label = 'Bubble Sort';
    chartConfig.data.datasets[1].label = 'Selection Sort';
    chartConfig.options.title.text = ['Algorithm Sort Analysis', 'Size list: defined by the user on click "Add new data"'];
    resetChart();
    updateChart();
    document.getElementById('sortAllData').style.display = 'none';
    document.getElementById('searchAnalysis').classList.remove('selected');
    document.getElementById('sortAnalysis').classList.add('selected');
  });
}

(function() {
  resetChartData();
  addChartData();
  removeChartData();
  orderChartData();
  selectAnalysisType();
}(this));