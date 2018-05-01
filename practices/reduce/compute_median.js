'use strict';

function compute_median(collection) {
  collection = rankDesc(collection);
  if(collection.length % 2 == 0)
    return (collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;

  return collection[Math.floor(collection.length / 2)];
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
}

function change(index_a, index_b, array){
  let value = array[index_a];
  array[index_a] = array[index_b];
  array[index_b] = value;
  return array;
}

module.exports = compute_median;
