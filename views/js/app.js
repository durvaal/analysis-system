'use strict';

const getAnalysisSequentialBinary = () => {
  return $.getJSON('analysis-sequential-binary').then(analysis => {
    return analysis;
  });
}

const resetChartData = () => {
  document.getElementById('randomizeData').addEventListener('click', () => {
    chartConfig.data.datasets[0].data = [];
    chartConfig.data.datasets[1].data = [];
    chartConfig.data.labels = [];

    window.myLine.update();
  });
}

const addChartData = () => {
  document.getElementById('addData').addEventListener('click', async () => {
    if (chartConfig.data.datasets.length > 0) {
      const {
        soughtElement,
        totalTimeUsingSequentialSearch,
        totalTimeUsingBinarySearch,
      } = await getAnalysisSequentialBinary();

      chartConfig.data.labels.push(soughtElement);
      chartConfig.data.datasets[0].data.push(totalTimeUsingSequentialSearch);
      chartConfig.data.datasets[1].data.push(totalTimeUsingBinarySearch);

      window.myLine.update();
    }
  });
}

const removeChartData = () => {
  document.getElementById('removeData').addEventListener('click', () => {
    chartConfig.data.labels.splice(-1, 1); // remove the label first

    chartConfig.data.datasets.forEach(function(dataset) {
      dataset.data.pop();
    });

    window.myLine.update();
  });
}

(function() {
  resetChartData();
  addChartData();
  removeChartData();
}(this));