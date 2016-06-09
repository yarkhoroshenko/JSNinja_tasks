function myBind(fn, newThis) {
  'use strict';
  return function func() {
    var i;
    var args = [];
    for (i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    fn.apply(newThis, args);
  };
}

window.myBind = myBind;
