'use strict';

function choose_common_elements(collection_a, collection_b) {
  var result = [];
  for(let i = 0; i < collection_a.length; i++){
    for(let j = 0; j < collection_b.length; j++){
      if(collection_a[i] == collection_b[j])
        result.push(collection_a[i]);
    }
  }
  return result;
}

module.exports = choose_common_elements;
