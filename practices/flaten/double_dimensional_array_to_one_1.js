'use strict';

function double_to_one(collection) {
  var result = [collection[0]];
  for(let i = 1; i < collection.length; i++){
    for(let j = 0; j < collection[i].length; j++){
      result.push(collection[i][j]);
    }
  }
  return result;
}

module.exports = double_to_one;
