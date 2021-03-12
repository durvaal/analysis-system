'use strict';

const generateRandomListNumbers = (sizeList) => {
  let numbers = [];

  for (var i = 0; i <= sizeList; i++) {
		numbers.push(i);
  }

  return numbers;
}

const searchRandomElementOnList = (list) => {
	return list[Math.floor(Math.random() * list.length)];
}

module.exports = {
  generateRandomListNumbers,
  searchRandomElementOnList,
};