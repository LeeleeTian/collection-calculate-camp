'use strict';

function collect_min_number(collection) {
  let smallestElement = collection[0];
  for(let j = 1; j < collection.length; j++){
    if(collection[j] < smallestElement)
      smallestElement = collection[j];
  }
  return smallestElement;
}

module.exports = collect_min_number;
