'use strict'

function count_same_elements(collection) {
  var result = [];

  for(let i = 0; i < collection.length; i++){
    let flag = 0;

    if(result != []){
      if(collection[i].length != 1){
        switch(collection[i][1]){
          case '-':
            var arr = collection[i].split('-', 2);
            break;
          case ':':
            var arr = collection[i].split(':', 2);
            break;
          case '[':
            var arr = collection[i].split('[', 2);
            arr[1] = (arr[1].split(']',1))[0];
            break;
        }
        collection.splice(i, 1, arr[0]);
        for(let k = 1; k < parseInt(arr[1]); k++){
          collection.splice(i, 0, arr[0]);
        }
      }

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
