'use strict';

function spilt_to_zero(number, interval) {
  var result = [number];

  if(number > 0){
    do{
      number -= interval;
      number = parseFloat(number.toFixed(1));
      result.push(number);
    }while(number > 0);
  }else if(number < 0){
    do{
      number += interval;
      number = parseFloat(number.toFixed(1));
      result.push(number);
    }while(number < 0);
  }

  return result;
}

module.exports = spilt_to_zero;
