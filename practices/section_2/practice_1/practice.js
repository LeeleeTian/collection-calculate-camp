'use strict'

function count_same_elements(collection) {
  var result = [];

  for(let i = 0; i < collection.length; i++){
    let flag = 0;

    if(result != []){
      for(let j = 0; j < result.length; j++){
        if(result[j].key == collection[i]){
          result[j].count++;
          flag = 1;
          break;
        }
      }
    }

    if(flag == 0)
      result.push({key: collection[i], count: 1});
  }
  return result;
}

module.exports = count_same_elements;
