'use strict';

function get_letter_interval_2(number_a, number_b) {
  var collection = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x','y', 'z', 'aa', 'ab', 'ac',
  'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am',
  'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw',
  'ax', 'ay', 'az', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'bg',
  'bh', 'bi', 'bj', 'bk', 'bl', 'bm', 'bn', 'bo', 'bp', 'bq',
  'br', 'bs', 'bt', 'bu', 'bv', 'bw', 'bx', 'by', 'bz'];
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

module.exports = get_letter_interval_2;
