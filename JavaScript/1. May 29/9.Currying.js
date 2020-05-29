// Simple Currying

var add = function (a) {
  return function (b) {
    return a + b;
  }
}

var addToFive = add(5);

console.dir(addToFive);

console.log(addToFive(3));

// ES6

var avg = function (...n) {
  let tot = 0;
  for (let i = 0; i < n.length; i++) {
    tot += n[i];
  }
  return tot / n.length;
}

var spiceUp = function (fn, ...n) {
  return function (...m) {
    return fn.apply(this, n.concat(m));
  }
}

var doAvg = spiceUp(avg, 1, 2, 3);

console.log(doAvg(2));