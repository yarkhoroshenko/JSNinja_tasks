function biggestPrimePalindrome(size) {
  'use strict';
  var max = '';
  var s;
  var x;
  var found = -1;
  function isPrime(number) {
    var i;
    for (i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  for (s = 0; s < (+size); s++) {
    max = max + '9';
  }
  for (x = (+max); x > (((+max) + 1) / 10); x--) {
    if (x === (+x.split('').reverse().join('')) && isPrime(x)) {
      if (x > found) {
        return x;
      }
    }
  }
  return found;
}

window.biggestPrimePalindrome = biggestPrimePalindrome;
