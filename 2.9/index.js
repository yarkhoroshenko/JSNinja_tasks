function floyd1(paths) {
  'use strict';
  var matrix = [];
  var i;
  var k;
  var c;
  var s;
  var x;
  var y;
  var e1;
  var e2;
  var e3;
  var row;
  // var spaces = 0;
  for (i = 0; i < paths.length; i++) {
    if (!matrix[+paths[i].from - 1]) matrix[+paths[i].from - 1] = [];
    if (!matrix[+paths[i].to - 1]) matrix[+paths[i].to - 1] = [];
    matrix[+paths[i].from - 1][+paths[i].to - 1] = paths[i].price;
    matrix[+paths[i].to - 1][+paths[i].from - 1] = paths[i].price;
  }

  for (k = 0; k < matrix.length; k++) {
    for (c = 0; c < matrix.length; c++) {
      for (s = 0; s < matrix.length; s++) {
        e1 = matrix[c][s] || Infinity;
        e2 = matrix[c][k] || Infinity;
        e3 = matrix[k][s] || Infinity;
        if (!matrix[c][s] || +e1 > (+e2 + +e3)) {
          matrix[c][s] = (+e2 + +e3);
          // if ((spaces + 1) < ('' + matrix[c][s]).length) spaces++;
        }
      }
    }
  }
  for (x = 0; x < matrix.length; x++) {
    row = '';
    for (y = 0; y < matrix[x].length; y++) {
      if (!matrix[x][y]) {
        row = row + 'x ';
        continue;
      }
      row = row + matrix[x][y] + ' ';
    }
    window.console.log(row);
  }
}

window.floyd1 = floyd1;
