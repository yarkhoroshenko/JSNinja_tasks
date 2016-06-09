var R = {};
R._ = {};
R.bind = function bind(func) {
  'use strict';
  var i;
  var args = Array.prototype.slice.call(arguments, 1);
  for (i = 0; i < args.length; i++) {
    if (args[i] === R._) delete args[i];
  }
  return function returnFunc() {
    var j;
    var y;
    var newArgs = [].concat(args);
    for (j = 0; j < newArgs.length; j++) {
      if (typeof newArgs[j] === 'undefined') {
        newArgs[j] = Array.prototype.shift.call(arguments);
      }
    }
    for (y = 0; y < arguments.length; y++) {
      newArgs.push(arguments[y]);
    }
    func.apply(newArgs[0], newArgs.slice(1));
  };
};
