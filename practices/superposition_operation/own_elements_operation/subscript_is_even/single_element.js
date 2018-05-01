'use strict';
var single_element = function(collection){
  let result = [];

  for(let i = 1; i < collection.length; i += 2){
    let flag = 0;

    if(collection[i] == ' ')
      continue;

    for(let j = i + 2; j < collection.length; j += 2){
      if(collection[i] == collection[j]){
        collection[j] = ' ';
        flag = 1;
      }
    }

    if(flag == 0)
      result.push(collection[i]);
  }

  return result;
};
module.exports = single_element;
