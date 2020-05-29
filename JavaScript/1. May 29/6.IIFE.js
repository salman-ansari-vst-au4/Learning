((function increment(i) {
  return i + 1;
})())

  (function () { }()); // another syntax

// will not return anything
!function () { }();


// own library

var counter = (function () {
  var i = 0;

  return {
    get: function () {
      return i;
    },
    set: function (val) {
      i = val;
      return i;
    },
    increment: function () {
      i++;
      return i;
    }
  }
})();

console.log(counter.get());
console.log(counter.set(6));
console.log(counter.increment());
console.log(counter.get());