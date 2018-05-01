'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];

  if(number_a != number_b){
    let num = number_a;
    do{
      if(isEven(num))
        result.push(num);
      (num < number_b)? num++ : num--;
    }while(num != number_b)
  }

  if(isEven(number_b))
    result.push(number_b);

  return result;
}

function isEven(number){
  return (number % 2 == 0);
}

module.exports = get_integer_interval_2;
