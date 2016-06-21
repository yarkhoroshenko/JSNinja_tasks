function rpn (arr) {
  'use strict';
  var i;
  var stack = [];
  var op1;
  var op2;
  for (i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      op1 = stack.pop();
      op2 = stack.pop();
      if (typeof op1 === 'undefined' || typeof op2 === 'undefined') return false;
      if (arr[i] === '+') {
        stack.push(op2 + op1);
      }
      if (arr[i] === '-') {
        stack.push(op2 - op1);
      }
      if (arr[i] === '*') {
        stack.push(op2 * op1);
      }
      if (arr[i] === '/') {
        if (!op1) return false;
        stack.push(op2 / op1);
      }
    } else {
      stack.push(arr[i]);
    }
  }
  if (stack.length === 1) return stack[0];
  return false;
}

window.rpn = rpn;
