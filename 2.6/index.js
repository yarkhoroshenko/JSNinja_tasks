function djkstra(firstNode, lastNode, paths) {
  'use strict';
  var matrix = [];
  var arrCost = [];
  var arrPath = [];
  var arrChanged = [1];
  var indexFrom = +firstNode - 1;
  var i;
  var c;
  var d;
  var s;
  var changedNode;
  var indexChange;

  for (i = 0; i < paths.length; i++) {
    if (!matrix[+paths[i].from - 1]) matrix[+paths[i].from - 1] = [];
    if (!matrix[+paths[i].to - 1]) matrix[+paths[i].to - 1] = [];
    matrix[+paths[i].from - 1][+paths[i].to - 1] = paths[i].price;
    matrix[+paths[i].to - 1][+paths[i].from - 1] = paths[i].price;
  }

  for (c = 0; c < matrix.length; c++) {
    arrCost[c] = 1 / 0;
    arrPath[c] = [+c + 1];
  }

  arrCost[indexFrom] = 0;

  do {
    for (d = arrChanged.length; d > 0; d--) {
      changedNode = arrChanged.pop();
      indexChange = +changedNode - 1;
      for (s = 0; s < matrix[indexChange].length; s++) {
        if (!matrix[indexChange][s]) continue;
        if (arrCost[s] > (matrix[indexChange][s] + arrCost[indexChange])) {
          arrCost[s] = (matrix[indexChange][s] + arrCost[indexChange]);
          arrPath[s] = [].concat(arrPath[indexChange], +s + 1);
          if (arrChanged.indexOf(+s + 1) === -1) arrChanged.push(+s + 1);
        }
      }
    }
  } while (arrChanged.length !== 0);

  return arrPath[+lastNode - 1];
}

  // for (var x = 0; x < matrix.length; x++) {
  //   var row = '';
  //   for (var y = 0; y < matrix[x].length; y++) {
  //     if (!matrix[x][y]) {
  //       row = row + 'x_';
  //       continue;
  //     }
  //     row = row + matrix[x][y] + '_';
  //   }
  //   console.log(row);
  // }

window.djkstra = djkstra;
