'use strict';

function grouping_count(collection) {
  var result =
  {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0
  };

  for(let i = 0; i < collection.length; i++){
    let num = collection[i];
    switch (num) {
      case 1:
        result['1']++;
        break;
      case 2:
        result['2']++;
        break;
      case 3:
        result['3']++;
        break;
      case 4:
        result['4']++;
        break;
      }
  }

  return result;
}

module.exports = grouping_count;
