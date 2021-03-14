
const { performance } = require('perf_hooks');
const { generateOrderedListNumbers, searchRandomElementOnList } = require('./helpers/helpers');
const binarySearch = require('./algorithms/search/binarySearch');
const sequentialSearch = require('./algorithms/search/sequentialSearch');
const bubbleSort = require('./algorithms/sort/bubbleSort');
const selectionSort = require('./algorithms/sort/selectionSort');

const getBinaryVsSequentialSearchAnalysis = () => {
  const generatedList = generateOrderedListNumbers(1000000);
  const soughtElement = searchRandomElementOnList(generatedList);
  const totalTimeUsingSequentialSearch = sequentialSearch(generatedList, soughtElement, performance);
  const totalTimeUsingBinarySearch = binarySearch(generatedList, soughtElement, performance);

  return {
    soughtElement,
    totalTimeUsingSequentialSearch,
    totalTimeUsingBinarySearch,
  };
}

const getBubbleVsSelectionSortAnalysis = (list) => {
  const copyList = Object.assign([], list);
  const { list: listSortedByBubble, time: totalTimeUsingBubbleSort } = bubbleSort(copyList, performance);
  const { list: listSortedBySelecion, time: totalTimeUsingSelectionSort } = selectionSort(copyList, performance);

  return {
    list,
    listSortedByBubble,
    listSortedBySelecion,
    totalTimeUsingBubbleSort,
    totalTimeUsingSelectionSort,
  };
}

module.exports = {
  getBinaryVsSequentialSearchAnalysis,
  getBubbleVsSelectionSortAnalysis
};