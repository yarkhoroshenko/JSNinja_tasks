function search(needle, haystack) {
  'use strict';
  var k;
  var keys;
  if (typeof haystack === 'object') {
    keys = Object.keys(haystack);
  } else {
    return haystack === needle;
  }
  for (k = 0; k < keys.length; k++) {
    if (search(needle, haystack[keys[k]])) return true;
  }
  return false;
}

window.search = search;
