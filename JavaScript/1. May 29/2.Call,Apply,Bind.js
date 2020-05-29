var obj = { num: 2 };

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
}

console.log(addToThis.call(obj, 2, 1, 3));
//          function.call(obj, param...);

console.log(addToThis.apply(obj, [2, 1, 3]));
// difference between call and apply is apply send parameter in array

var bindMethod = addToThis.bind(obj, 2, 1, 3);

console.log(addToThis.bind(obj, 2, 1, 3)); // return function
console.dir(bindMethod);  // execute function
console.log(bindMethod(2,1,3));  // execute function