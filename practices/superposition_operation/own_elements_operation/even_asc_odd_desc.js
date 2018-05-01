'use strict';
var even_asc_odd_desc = function(collection){
  let even_collection = [];
  let odd_collection = [];

  for(let i = 0; i < collection.length; i++){
    if(collection[i] % 2 == 0)
      even_collection.push(collection[i]);
    else
      odd_collection.push(collection[i]);
  }

  even_collection = rankDesc(even_collection);
  odd_collection = rankAsc(odd_collection);

  return even_collection.concat(odd_collection);
};

//Smallest -> larger
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

//largest -> smaller
function rankAsc(collection){
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

module.exports = even_asc_odd_desc;
