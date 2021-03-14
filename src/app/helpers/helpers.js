'use strict';

const generateOrderedListNumbers = (sizeList) => {
  let numbers = [];

  for (let i = 0; i <= sizeList; i++) {
		numbers.push(i);
  }

  return numbers;
}

const searchRandomElementOnList = (list) => {
	return list[Math.floor(Math.random() * list.length)];
}

module.exports = {
  generateOrderedListNumbers,
  searchRandomElementOnList,
};