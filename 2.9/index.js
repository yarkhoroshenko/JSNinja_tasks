function floyd1(paths) {
	'use strict';
	var matrix = [];
	var i, k, c, s, x, y;
	var e1, e2, e3; 
	for (i = 0; i < paths.length; i++) {
			if (!matrix[+paths[i].from - 1]) matrix[+paths[i].from - 1] = [];
			if (!matrix[+paths[i].to - 1]) matrix[+paths[i].to - 1] = [];
			matrix[+paths[i].from - 1][+paths[i].to - 1] = paths[i].price;
			matrix[+paths[i].to - 1][+paths[i].from - 1] = paths[i].price;
	}

	for (k = 0; k < matrix.length; k++) {
		for (c = 0; c < matrix.length; c++) {
			for (s = c + 1; s < matrix.length; s++) {
				e1 = matrix[c][s] || Infinity;
				e2 = matrix[c][k] || Infinity;
				e3 = matrix[k][s] || Infinity;
				if (!matrix[c][s] || +e1 > (+e2 + +e3)) {
					matrix[c][s] = (+e2 + +e3);
				}
			}
		}	
	}
	for (x = 0; x < matrix.length; x++) {
		var row = '';
		for (y = 0; y < matrix[x].length; y++) {
			if (!matrix[x][y]) {
				row = row + 'x ';
				continue;
			}
			row = row + matrix[x][y] + ' ';
		}
		console.log(row);
	}
}

window.floyd1 = floyd1;
