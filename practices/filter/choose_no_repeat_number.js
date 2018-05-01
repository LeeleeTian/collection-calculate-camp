'use strict';

function choose_no_repeat_number(collection) {
  var result = [collection[0]];

  for(let i = 1; i < collection.length; i++){
    let flag = 0;

    for(let j = 0; j < result.length; j++){
      if(collection[i] == result[j]){
        flag = 1;
        break;
      }
    }

    if(flag == 0)
      result.push(collection[i]);
  }

  return result;
}

module.exports = choose_no_repeat_number;
