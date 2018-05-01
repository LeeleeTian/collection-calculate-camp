'use strict';

function find_last_even(collection) {
  for(let i = collection.length - 1; i >= 0; i--){
    if(collection[i] % 2 == 0)
      return collection[i];
  }
  return null;
}

module.exports = find_last_even;
