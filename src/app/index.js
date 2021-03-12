const { generateRandomListNumbers, searchRandomElementOnList } = require('./helpers/helpers');
const binarySearch = require('./algorithms/binarySearch');
const sequentialSearch = require('./algorithms/sequentialSearch');

const getBinaryVsSequentialAnalysis = () => {
  const generatedList = generateRandomListNumbers(1000000);
  const soughtElement = searchRandomElementOnList(generatedList);
  const totalTimeUsingSequentialSearch = sequentialSearch(generatedList, soughtElement);
  const totalTimeUsingBinarySearch = binarySearch(generatedList, soughtElement);

  return {
    soughtElement,
    totalTimeUsingSequentialSearch,
    totalTimeUsingBinarySearch,
  };
}

module.exports = {
  getBinaryVsSequentialAnalysis,
};