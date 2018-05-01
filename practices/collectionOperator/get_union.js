'use strict';

function get_union(collection_a, collection_b) {
  var result = collection_a;

  for(let i = 0; i < collection_b.length; i++){
    let flag = 0;

    for(let j = 0; j < collection_a.length; j++){
      if(collection_b[i] == collection_a[j]){
        flag = 1;
        break;
      }
    }

    if(flag == 0)
      result.push(collection_b[i]);
  }

  return result;
}

module.exports = get_union;
