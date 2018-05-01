'use strict';

function get_letter_interval(number_a, number_b) {
  var collection = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  var result = [];
  let j = number_b - 1;

  if(number_a != number_b){
    let i = number_a - 1;
    do{
      result.push(collection[i]);
      (i < j)? i++ : i--;
    }while(i != j)
  }

  result.push(collection[j]);

  return result;
}

module.exports = get_letter_interval;
