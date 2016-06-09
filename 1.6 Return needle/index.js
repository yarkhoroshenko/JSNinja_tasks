function search(needle, haystack, path) {
  'use strict';
  var k;
  var keys;
  var p = path;
  var t;
  var n;
  var temp;
  var i;
  function checkString(str) {
    temp = str.split('');
    for (i = 0; i < temp.length; i++) {
      if (temp[i].toLowerCase() === temp[i].toUpperCase()) return false;
    }
    return true;
  }
  if (typeof haystack === 'object') {
    keys = Object.keys(haystack);
    for (k = 0; k < keys.length; k++) {
      if (checkString('' + keys[k])) {
        n = '.' + keys[k];
      } else {
        if (isNaN(+keys[k])) {
          n = '["' + keys[k] + '"]';
        } else {
          n = '[' + keys[k] + ']';
        }
      }
      if (!p || p.length === 0) {
        p = [];
        if (n[0] === '.') n = n.substr(1);
        p.push(n);
      } else {
        p.push(n);
      }
      t = search(needle, haystack[keys[k]], p);
      if (t) return t;
      p.pop();
    }
  } else {
    if (haystack === needle) return p.join('');
  }
  return false;
}

window.search = search;
