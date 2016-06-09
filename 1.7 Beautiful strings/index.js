function calculateBeauty(str) {
  var temp = str.split('');
  var i;
  var j;
  var count = {};
  var sum = 0;
  var val;
  var s;
  var w = 26;
  function compareNumbers(a, b) {
    return b - a;
  }
  for (i = 0; i < temp.length; i++) {
    if (temp[i].toLowerCase() === temp[i].toUpperCase()) continue;
    s = temp[i].toLowerCase();
    if (!count[s]) {
      count[s] = 1;
    } else {
      count[s]++;
    }
  }
  val = Object.keys(count).map(function mapCount(key) { return count[key]; }).sort(compareNumbers);
  for (j = 0; j < val.length; j++) {
    sum = sum + (val[j] * w--);
  }
  return sum;
}

window.calculateBeauty = calculateBeauty;
