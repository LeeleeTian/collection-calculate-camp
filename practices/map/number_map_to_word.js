'use strict';
var number_map_to_word = function(collection){
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
    result.push(map[collection[i] - 1]);
  }
  return result;
};

module.exports = number_map_to_word;
