/**
 * Created by tilion on 4/30/16.
 */
function f(n, p1, p2) {
  'use strict';
  var x = n.toString(2).split('').reverse();
  return x[p1 - 1] === x[p2 - 1];
}

window.f = f;
