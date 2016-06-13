function generateTable(a, b) {
  'use strict';
  var string = '';
  var i;
  var j;
  var k;
  for (i = 1; i < a + 1; i++) {
    for (j = 1; j < b + 1; j++) {
      k = i * j;
      if ((k - 9) < 1) k = ' ' + k;
      if ((k - 99) < 1) k = ' ' + k;
      if ((k - 999) < 1) k = ' ' + k;
      if (j === b) {
        string = string + k + '\n';
      } else {
        string = string + k + ' ';
      }
    }
  }
  return string;
}

window.generateTable = generateTable;
