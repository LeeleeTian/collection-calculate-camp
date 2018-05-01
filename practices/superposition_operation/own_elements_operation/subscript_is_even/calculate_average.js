'use strict';
var calculate_average = function(collection){
  let sum = 0;
  let count = 0;
  for(let i = 1; i < collection.length; i += 2){
      sum += collection[i];
      count++;
  }
  return sum / count;
};
module.exports = calculate_average;
