'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];

  for(let i = 0; i < collection_a.length; i++){
    let flag = 0;

    for(let j = 0; j < collection_b.length; j++){
      if(collection_a[i] % collection_b[j] == 0){
        result.push(collection_a[i]);
        flag = 1;
        break;
      }
    }

    if(flag == 1)
      continue;
  }
  
  return result;
}

module.exports = choose_divisible_integer;
