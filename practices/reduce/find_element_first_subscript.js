'use strict';

function calculate_elements_sum(collection, element) {
  for(let i = 0; i < collection.length; i++){
    if(collection[i] == element)
      return i;
  }
  return null;
}

module.exports = calculate_elements_sum;