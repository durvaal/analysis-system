const generateOddNumbers = (sizeList) => {
  let numbers = new Array();

  for (var i = 0; i <= sizeList; i++) {
    if (isOdd(i)){
      numbers.push(i);
    }
  }

  return numbers;
}

const isOdd = (number) => {
  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      return false;
    }
  }

  return number > 1;
}

// var item = items[Math.floor(Math.random() * items.length)];

module.exports = generateOddNumbers;