const sequentialSearch = (list, element) => {
  let position = 0;
  let finded = false;

  while(position < list.length && !finded) {
    if (list[position] === element) {
      finded = true;
    } else {
      position+=1;
    }
  }

  return finded;
};

module.exports = sequentialSearch;
