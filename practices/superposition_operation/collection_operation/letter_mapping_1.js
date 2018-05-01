'use strict';

function even_to_letter(collection) {
  var map = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x','y', 'z', 'aa', 'ab', 'ac',
  'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am',
  'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw',
  'ax', 'ay', 'az', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'bg',
  'bh', 'bi', 'bj', 'bk', 'bl', 'bm', 'bn', 'bo', 'bp', 'bq',
  'br', 'bs', 'bt', 'bu', 'bv', 'bw', 'bx', 'by', 'bz'];
  var result = [];

  for(let i = 0; i < collection.length; i++){
    if(collection[i] % 2 == 0)
      result.push(map[i]);
  }
  return result;
}

module.exports = even_to_letter;
