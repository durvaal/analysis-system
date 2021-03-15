'use strict';

const bubbleSort = (list, performance) => {
  const startTime = performance.now();
  const swapPosition = (prevIndex, nextIndex) => {
    const auxiliarElement = list[nextIndex];
    list[nextIndex] = list[prevIndex];
    list[prevIndex] = auxiliarElement;
  };

  for (let index1 = 0; index1 < list.length; index1++) {
    for (let index2 = 0; index2 < list.length; index2++) {
      if (list[index2] > list[index1]) {
        swapPosition(index1, index2);
      }
    }
  }

  return { list, time: performance.now() - startTime };
};

module.exports = bubbleSort;