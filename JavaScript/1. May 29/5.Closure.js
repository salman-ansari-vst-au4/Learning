// Simple Closure

var a = 5;

var b = function () { // a is closure for  function b
  var c = 2;

  return c + a;
}

a = 6;

console.dir(b);

// Inner Function Closure

var addTo = function (passed) {
  return function (inner) {
    return passed + inner;
  }
}

console.dir(addTo(3));
console.log(addTo(3)(4));

var add10 = new addTo(10);

console.dir(add10);
console.log(add10(4));
