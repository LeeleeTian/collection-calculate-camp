'use strict';

var calculate_median = function(collection){
  let result = [];
  for(let i = 1; i < collection.length; i += 2){
      result.push(collection[i]);
  }

  if(result.length % 2 == 0)
    return (result[result.length / 2 - 1] + result[result.length / 2]) / 2;

  return result[Math.floor(result.length / 2)];
};

module.exports = calculate_median;
