'use strict';

function median_to_letter(collection) {
  var map = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x','y', 'z', 'aa', 'ab', 'ac',
  'ad', 'ae', 'af', 'ag', 'ah', 'ai', 'aj', 'ak', 'al', 'am',
  'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw',
  'ax', 'ay', 'az', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'bg',
  'bh', 'bi', 'bj', 'bk', 'bl', 'bm', 'bn', 'bo', 'bp', 'bq',
  'br', 'bs', 'bt', 'bu', 'bv', 'bw', 'bx', 'by', 'bz'];

  if(collection.length % 2 == 0)
    return map[Math.floor((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2)];

  return map[collection[Math.floor(collection.length / 2)] - 1];

}

module.exports = median_to_letter;
