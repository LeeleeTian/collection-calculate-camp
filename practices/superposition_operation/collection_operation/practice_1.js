'use strict';

function hybrid_operation(collection) {
  let sum = 0;
  for(let i = 0; i < collection.length; i++){
    sum += collection[i] * 3 + 2;
  }
  return sum;
}

module.exports = hybrid_operation;
