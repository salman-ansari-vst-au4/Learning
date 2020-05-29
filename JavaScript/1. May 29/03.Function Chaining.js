var obj = function () {
  this.i = 0;
  this.add = function (i) {
    this.i += i;
    return this;
  }
  this.sub = function (i) {
    this.i -= i;
    return this;
  }
  this.print = function () {
    console.log(this.i);
  }
}

var x = new obj();

x.add(3);
x.print();
x.sub(5);
x.print();

// Chaining

x.add(3).sub(5).print();

// Using Closure

var obj = function () {
  var i = 0;
  var add = function (j) {
    i += j;
    return this;
  }
  var sub = function (j) {
    i -= j;
    return this;
  }
  var print = function () {
    console.log(i);
  }

  return { add, sub, print };
}

var x = obj();
x.add(3).sub(5).print();

