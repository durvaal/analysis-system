'use strict';

const selectionSort = (list, performance) => {
  const startTime = performance.now();
  const swapPosition = (prevIndex, nextIndex) => {
    const auxiliarElement = list[nextIndex];
    list[nextIndex] = list[prevIndex];
    list[prevIndex] = auxiliarElement;
  };

  for (let index1 = 0; index1 < list.length; index1++) {
    let currentMinimumIndex = index1;
    for (let index2 = index1 + 1; index2 < list.length; index2++) {
      if (list[index2] < list[currentMinimumIndex]) {
        currentMinimumIndex = index2;
      }
    }
    swapPosition(index1, currentMinimumIndex);
  }

  return { list, time: performance.now() - startTime };
};

module.exports = selectionSort;