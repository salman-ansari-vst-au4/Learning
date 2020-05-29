var newObject = new Object;

var simpleObject = {};

var Salman = {
  sirname: "Ansari",
  age: 23,
  getSirname: function () {
    return this.sirname;
  }
}

Salman.profile = "Full Stack Developer";

delete (Salman.age); // delete the property

console.log(Salman.getSirname); // return function
console.log(Salman.getSirname); // return "Ansari"

// Function Object

var Sallu = function () {
  // public property
  this.sirname = "Ahmed";
  this.age = 23.5;
  this.getSirname = function () {
    return this.sirname;
  }
  this.getProfile = function () { // yet you can access private property through public method
    return profile;
  }
  // private property
  var profile = "Full Stack Developer";
  var getAge = function () { // can't access private method
    return this.age;
  }
}

// to acces this property create object from obove object

var Sal = new Sallu(); // now Sal is an normal object

console.dir(Sal);
console.log(Sal instanceof Sallu); // Sal is create from Sallu
console.log(Sal.getProfile());

// console.log(Sal.getAge());
