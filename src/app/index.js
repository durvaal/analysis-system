
const { performance } = require('perf_hooks');
const { generateRandomListNumbers, searchRandomElementOnList } = require('./helpers/helpers');
const binarySearch = require('./algorithms/search/binarySearch');
const sequentialSearch = require('./algorithms/search/sequentialSearch');

const getBinaryVsSequentialAnalysis = () => {
  const generatedList = generateRandomListNumbers(1000000);
  const soughtElement = searchRandomElementOnList(generatedList);
  const totalTimeUsingSequentialSearch = sequentialSearch(generatedList, soughtElement, performance);
  const totalTimeUsingBinarySearch = binarySearch(generatedList, soughtElement, performance);

  return {
    soughtElement,
    totalTimeUsingSequentialSearch,
    totalTimeUsingBinarySearch,
  };
}

module.exports = {
  getBinaryVsSequentialAnalysis,
};