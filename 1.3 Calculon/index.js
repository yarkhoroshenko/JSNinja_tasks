function calc(n1, op, n2, n3) {
  'use strict';
  var result;
  if (op === '*') {
    result = n1 * n2;
  }
  if (op === '/') {
    result = n1 / n2;
  }
  if (op === '+') {
    result = n1 + n2;
  }
  if (op === '-') {
    result = n1 - n2;
  }
  if (result.toFixed(10) === n3.toFixed(10)) return true;
  return false;
}

window.calc = calc;
