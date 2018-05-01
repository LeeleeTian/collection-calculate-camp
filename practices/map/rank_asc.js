'use strict';
var rank_asc = function(collection){
  for(let i = 0; i < collection.length; i++){
    let biggestElement = collection[i];
    let indexOfBiggest = i;

    for(let j = i + 1; j < collection.length; j++){
      if(collection[j] > biggestElement){
        biggestElement = collection[j];
        indexOfBiggest = j;
      }
    }

    if(i != indexOfBiggest)
      collection = change(i, indexOfBiggest, collection);
  }

  return collection;
};

function change(index_a, index_b, array){
  let value = array[index_a];
  array[index_a] = array[index_b];
  array[index_b] = value;
  return array;
};

module.exports = rank_asc;
