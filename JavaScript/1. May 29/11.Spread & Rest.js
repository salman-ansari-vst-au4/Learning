var x = (...n) => {
  console.log(n);
}

x(1, 2, 3, 4)

//arguments doesn't have all the property of array

var y = (a, b, ...n) => {
  console.log(a, b, n);
}

y(1, 2, 3, 4)

var first = [1, 2, 3, 4];
var last = [5, 6, 7, 8];
var result = [0, ...first, ...last]