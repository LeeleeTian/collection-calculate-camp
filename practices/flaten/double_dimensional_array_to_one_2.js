'use strict';

function double_to_one(collection) {
  var result = [];
  for(let i = 0; i < collection.length; i++){
    for(let j = 0; j < collection[i].length; j++){
      if(!isExist(collection[i][j], result))
        result.push(collection[i][j]);
    }
  }
  return result;
}

function isExist(element, array){
  if(array != []){
    for(let k = 0; k < array.length; k++){
      if(element == array[k])
        return true;
    }
  }
  return false;
}

module.exports = double_to_one;
