function clone(obj) {
  'use strict';
  var i;
  var result;
  var keys = Object.keys(obj);
  if (Array.isArray(obj)) {
    result = [];
  } else {
    result = {};
  }
  for (i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'object') {
      result[keys[i]] = clone(obj[keys[i]]);
    } else {
      result[keys[i]] = obj[keys[i]];
    }
  }
  return result;
}

window.clone = clone;
