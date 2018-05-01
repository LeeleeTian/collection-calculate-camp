'use strict';

function average_to_letter(collection) {
  var map = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x','y', 'z', 'aa', 'ab', 'ac',
  'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am',
  'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw',
  'ax', 'ay', 'az', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'bg',
  'bh', 'bi', 'bj', 'bk', 'bl', 'bm', 'bn', 'bo', 'bp', 'bq',
  'br', 'bs', 'bt', 'bu', 'bv', 'bw', 'bx', 'by', 'bz'];
  let sum = 0;
  for(let i = 0; i < collection.length; i++){
    sum += collection[i];
  }
  return map[Math.floor(sum / collection.length)];
}

module.exports = average_to_letter;
