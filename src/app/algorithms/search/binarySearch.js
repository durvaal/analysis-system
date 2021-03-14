'use strict';

const binarySearch = (list, element, performance) => {
  let fistIndex= 0;
  let lastIndex= list.length - 1;
  let finded = false;
  let medianIndex = 0;
	const startTime = performance.now();

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

module.exports = binarySearch;