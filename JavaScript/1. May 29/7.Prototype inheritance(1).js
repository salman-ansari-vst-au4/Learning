var x = function (j) {
  this.i = 0;
  this.j = j;

  this.getJ = function () {
    return this.j;
  }
}

x.prototype.getI = function () {
  return this.i;
}

var x1 = new x(1);
var x2 = new x(2);

// getJ is a method of x1 and x2
console.log(x1.getJ());
console.log(x2.getJ());

// getI is not a method of x1 and x2 but of x | it looksup
console.log(x1.getI());
console.log(x2.getI());

console.dir(x) // Object(prop,meth) => function(prop,meth) => x(prop,meth)