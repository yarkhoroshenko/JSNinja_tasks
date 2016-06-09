function myBind(fn, newThis) {
  'use strict';
  var args = Array.prototype.slice.call(arguments, 2);
  return function func() {
    var i;
    for (i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    fn.apply(newThis, args);
  };
}

window.myBind = myBind;
