'use strict';

function get_intersection(collection_a, collection_b) {
  var result = [];
  for(let i = 0; i < collection_b.length; i++){
    for(let j = 0; j < collection_a.length; j++){
        if(collection_b[i] == collection_a[j])
          result.push(collection_b[i]);
    }
  }
  return result;
}

module.exports = get_intersection;
