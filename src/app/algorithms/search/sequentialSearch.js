'use strict';

const sequentialSearch = (list, element, performance) => {
  let position = 0;
  let finded = false;
	const startTime = performance.now();

  while(position < list.length && !finded) {
    if (list[position] === element) {
      finded = true;
    } else {
      position+=1;
    }
  }

  return performance.now() - startTime;
};

module.exports = sequentialSearch;