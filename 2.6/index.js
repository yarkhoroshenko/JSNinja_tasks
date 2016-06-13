function djkstra(firstNode, lastNode, paths) {
	'use strict';
	debugger;
	var matrix = [];
	var arrCost = [];
	var arrPath = [];
	var arrChanged = [];
	var indexFrom = +firstNode - 1;
	var i, c, f, d, s, changedNode;

	for (i = 0; i < paths.length; i++) {
			if (!matrix[+paths[i].from - 1]) matrix[+paths[i].from - 1] = [];
			if (!matrix[+paths[i].to - 1]) matrix[+paths[i].to - 1] = [];
			matrix[+paths[i].from - 1][+paths[i].to - 1] = paths[i].price;
			matrix[+paths[i].to - 1][+paths[i].from - 1] = paths[i].price;
	}

	for (c = 0; c < matrix.length; c++) {
		arrCost[c] = 1 / 0;
		arrPath[c] = [];
	}

	arrCost[indexFrom] = 0;

	for (f = 0; f < matrix[indexFrom].length; f++) {
		if (!matrix[indexFrom][f]) continue;
		if (arrCost[f] > matrix[indexFrom][f]) {
			arrCost[f] = matrix[indexFrom][f];
			arrChanged.push(f);
			arrPath[f].push(firstNode);
		} 
	}
	do {
		for (d = arrChanged.length; d > 0; d++) {
			changedNode = arrChanged.shift();
			for (s = 0; s < matrix[changedNode].length; s++) {
				if (!matrix[changedNode][s]) continue;
				if (arrCost[s] > matrix[changedNode][s]) {
					arrCost[s] = matrix[changedNode][s];
					arrPath[s] = arrPath[s].concat(arrPath[changedNode]);
					if (arrChanged.indexOf(s) === -1) arrChanged.push(s);
				}
			}
		}
	} while (arrChanged.length > 0);

	console.log(arrPath[lastNode]);

	// for (var x = 0; x < matrix.length; x++) {
	// 	var row = '';
	// 	for (var y = 0; y < matrix[x].length; y++) {
	// 		if (!matrix[x][y]) {
	// 			row = row + 'x_';
	// 			continue;
	// 		}
	// 		row = row + matrix[x][y] + '_';
	// 	}
	// 	console.log(row);
	// }
}