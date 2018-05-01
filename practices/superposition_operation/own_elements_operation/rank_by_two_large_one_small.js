'use strict';
function rank_by_two_large_one_small(collection){
  collection = rankDesc(collection);
  let result = [];
  for(let i = 0; i < collection.length; i += 3){
    if((i + 2) < collection.length)
      result.push(collection[i + 1], collection[i + 2]);
    else if((i + 1) < collection.length){
      result.push(collection[i], collection[i + 1]);
      break;
    }
    result.push(collection[i]);
  }
  return result;
}

function rankDesc(collection){
  for(let i = 0; i < collection.length; i++){
    let smallestElement = collection[i];
    let indexOfsmallest = i;

    for(let j = i + 1; j < collection.length; j++){
      if(collection[j] < smallestElement){
        smallestElement = collection[j];
        indexOfsmallest = j;
      }
    }

    if(i != indexOfsmallest)
      collection = change(i, indexOfsmallest, collection);
  }

  return collection;
};

function change(index_a, index_b, array){
  let value = array[index_a];
  array[index_a] = array[index_b];
  array[index_b] = value;
  return array;
};

module.exports = rank_by_two_large_one_small;
