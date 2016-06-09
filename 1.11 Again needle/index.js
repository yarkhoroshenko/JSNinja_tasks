function search(needle, haystack) {
  'use strict';
  var t;
  var stackPaths = [''];
  var stackValues = [haystack];
  function checkString(str) {
    var temp;
    var i;
    temp = str.split('');
    for (i = 0; i < temp.length; i++) {
      if (temp[i].toLowerCase() === temp[i].toUpperCase()) return false;
    }
    return true;
  }
  function unwrap(obj, p) {
    var k;
    var n;
    var keys;
    var path;
    keys = Object.keys(obj);
    for (k = 0; k < keys.length; k++) {
      path = p;
      if (checkString('' + keys[k])) {
        n = '.' + keys[k];
      } else {
        if (isNaN(+keys[k])) {
          n = '["' + keys[k] + '"]';
        } else {
          n = '[' + keys[k] + ']';
        }
      }
      if (path === '' && n[0] === '.') n = n.substr(1);
      path = path + n;
      stackPaths.push(path);
      stackValues.push(obj[keys[k]]);
    }
  }
  do {
    for (t = stackValues.length - 1; t >= 0; t--) {
      if (typeof stackValues[t] === 'object') {
        unwrap(stackValues.splice(t, 1)[0], stackPaths.splice(t, 1)[0]);
      } else {
        if (stackValues[t] !== needle) {
          stackPaths.splice(t, 1);
          stackValues.splice(t, 1);
        } else {
          return stackPaths[t];
        }
      }
    }
  } while (stackValues.length);
  return false;
}

window.search = search;
