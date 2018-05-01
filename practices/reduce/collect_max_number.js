'use strict';

function collect_max_number(collection) {
  let biggestElement = collection[0];
  for(let j = 1; j < collection.length; j++){
    if(collection[j] > biggestElement)
      biggestElement = collection[j];
  }
  return biggestElement;
}

module.exports = collect_max_number;
