'use strict';

const {
  performance
} = require('perf_hooks');

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

module.exports = sequentialSearch;