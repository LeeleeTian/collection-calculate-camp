'use strict';

function compute_chain_median(collection) {
  let amountOfNumber = findNumberAmount(collection);
  let num_arr = changeStrToArr(collection, amountOfNumber);
  return findMedian(num_arr);
}

function findNumberAmount(str){
  let amountOfChain = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] == '-')
      amountOfChain++;
  }
  return amountOfChain + 1;
}

function changeStrToArr(str, amount_number){
  let array = str.split('->', amount_number);
  for(let j = 0; j < array.length; j++){
    array[j] = parseInt(array[j]);
  }
  return array;
}

function findMedian(array){
  array = rankDesc(array);
  if(array.length % 2 == 0){
    return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
  }
  return array[Math.floor(array.length / 2)];
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

module.exports = compute_chain_median;
