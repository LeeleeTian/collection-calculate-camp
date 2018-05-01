'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];

  if(number_a != number_b){
    let num = number_a;
    do{
      result.push(num);
      (num < number_b)? num++ : num--;
    }while(num != number_b)
  }

  result.push(number_b);

  return result;
}

module.exports = get_integer_interval;
