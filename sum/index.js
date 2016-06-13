/**
 * Created by Tilion on 27.04.2016.
 */
function sum(x) {
  return function sumInner(y) {
    return x + y;
  };
}

window.sum = sum;
