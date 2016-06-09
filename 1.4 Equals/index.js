function equals(obj1, obj2) {
  'use strict';
  var i;
  var keys1 = Object.keys(obj1).sort();
  var keys2 = Object.keys(obj2).sort();
  if (keys1.length !== keys2.length) return false;
  for (i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) return false;
    if (
      typeof obj1[keys1[i]] === 'object' &&
      typeof obj2[keys1[i]] === 'object' &&
      Array.isArray(obj1[keys1[i]]) === Array.isArray(obj2[keys1[i]])
    ) {
      if (!equals(obj1[keys1[i]], obj2[keys1[i]])) return false;
    } else {
      if (obj1[keys1[i]] !== obj2[keys1[i]]) return false;
    }
  }
  return true;
}

window.equals = equals;
