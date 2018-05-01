'use strict'

function create_updated_collection(collection_a, object_b) {
  var result = [];

  for(let i = 0; i < collection_a.length; i++){
    let flag = 0;

    if(result != []){
      for(let j = 0; j < result.length; j++){
        if(result[j].key == collection_a[i]){
          result[j].count++;
          flag = 1;
          break;
        }
      }
    }

    if(flag == 0)
      result.push({key: collection_a[i], count: 1});
  }

  for(let m = 0; m < object_b.value.length; m++){
    for(let n = 0; n < result.length; n++){
      if(object_b.value[m] == result[n].key){
        result[n].count -= Math.floor(result[n].count / 3);
        break;
      }
    }
  }

  return result;
}

module.exports = create_updated_collection;
