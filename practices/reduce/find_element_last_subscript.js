'use strict';

function calculate_elements_sum(collection, element) {
  for(let i = collection.length - 1; i >= 0; i--){
    if(collection[i] == element)
      return i;
  }
  return null;
}

module.exports = calculate_elements_sum;
