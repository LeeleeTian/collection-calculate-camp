'use strict';
var even_group_calculate_average = function(collection){
  let result = [];
  let even_collection = [];
  let even_collection_1 = [];
  let even_collection_2 = [];
  let even_collection_3 = [];
  let average_collection = [];

  for(let i = 1; i < collection.length; i += 2){
      result.push(collection[i]);
  }

  for(let i = 0; i < result.length; i++){
    if(result[i] % 2 == 0)
      even_collection.push(result[i]);
  }

  if(even_collection.length == 0)
    return [0];

  for(let j = 0; j < even_collection.length; j++){
    if(Math.floor(even_collection[j] / 10) == 0){
      even_collection_1.push(even_collection[j]);
    }else if (Math.floor(even_collection[j] / 10) < 10){
      even_collection_2.push(even_collection[j]);
    }else if (Math.floor(even_collection[j] / 10) < 100){
      even_collection_3.push(even_collection[j]);
    }
  }

  if(even_collection_1.length != 0)
    average_collection.push(computeAverage(even_collection_1));

  if(even_collection_2.length != 0)
    average_collection.push(computeAverage(even_collection_2));

  if(even_collection_3.length != 0)
    average_collection.push(computeAverage(even_collection_3));

  return average_collection;
};

function computeAverage(collection){
  let sum = 0;
  for(let k = 0; k < collection.length; k++){
    sum += collection[k];
  }
  return sum / collection.length;
}





module.exports = even_group_calculate_average;
