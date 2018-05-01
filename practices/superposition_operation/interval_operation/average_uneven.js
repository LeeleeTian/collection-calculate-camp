'use strict';

function average_uneven(collection) {
  let sum = 0;
  let uneven_count = 0;
  for(let i = 0; i < collection.length; i++){
    if(collection[i] % 2 != 0){
      sum += collection[i];
      uneven_count++;
    }
  }
  return sum / uneven_count;
}

module.exports = average_uneven;
