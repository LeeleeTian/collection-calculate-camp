'use strict'

function create_updated_collection(collection_a, object_b) {
  var result = [];

  for(let i = 0; i < collection_a.length; i++){
    let flag = 0;

    if(result != []){
      if(collection_a[i].length != 1){
        switch(collection_a[i][1]){
          case '-':
            var arr = collection_a[i].split('-', 2);
            break;
          case ':':
            var arr = collection_a[i].split(':', 2);
            break;
          case '[':
            var arr = collection_a[i].split('[', 2);
            arr[1] = (arr[1].split(']',1))[0];
            break;
        }
        collection_a.splice(i, 1, arr[0]);
        for(let k = 1; k < parseInt(arr[1]); k++){
          collection_a.splice(i, 0, arr[0]);
        }
      }

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
