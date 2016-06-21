function convert(str) {
  'use strict';
  var i;
  var result = '';
  var stack = [];
  var s;
  var o;
  var order = {
    '(': 0,
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2
  };
  for (i = 0; i < str.length; i++) {
    s = str.charAt(i);
    if (s === ' ') continue;
    if (isNaN(s)) {
      if (s === '(') {
        stack.push(s);
        continue;
      }
      if (s === ')') {
        do {
          o = stack.pop();
          if (o === '(') break;
          result = result + o + ' ';
        } while (stack.length);
        continue;
      }
      while (order[s] <= order[stack[stack.length - 1]]) {
        o = stack.pop();
        result = result + o + ' ';
        continue;
      }
      stack.push(s);
    } else {
      result = result + s + ' ';
    }
  }
  while (stack.length) {
    o = stack.pop();
    result = result + o + ' ';
  }
  return result;
}

window.convert = convert;
