'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var result = [];

  for(let i = 0; i < collection_a.length; i++){
    let flag = 0;

    for(let j = 0; j < collection_b.length; j++){
      if(collection_a[i] == collection_b[j]){
        flag = 1;
        break;
      }
    }

    if(flag == 0)
      result.push(collection_a[i]);
  }
  
  return result;
}

module.exports = choose_no_common_elements;
