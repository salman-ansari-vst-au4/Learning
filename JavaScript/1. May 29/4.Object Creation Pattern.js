// Factory Pattern

var peopleFactory = function (name, age, state) {
  var temp = {};

  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function () {
    console.log(`${this.name}-${this.age}-${this.state}`)
  };

  return temp;
}

var Person1 = peopleFactory('Salman', 23, 'Mumbai');
var Person2 = peopleFactory('Salma', 20, 'Kerala');

Person1.printPerson();
Person2.printPerson();

// Contructor Pattern

var peopleConstructor = function (name, age, state) {

  this.age = age;
  this.name = name;
  this.state = state;

  this.printPerson = function () {
    console.log(`${this.name}-${this.age}-${this.state}`)
  };

}

var Person3 = new peopleConstructor('Ahmed', 23, 'Delhi');
var Person4 = new peopleConstructor('Ansari', 20, 'UP');

Person3.printPerson();
Person4.printPerson();

// Prototype Pattern

var personProto = function () {

}

personProto.prototype.age = 0;
personProto.prototype.name = 'Name';
personProto.prototype.state = 'State';

personProto.prototype.printPerson = function () {
  console.log(`${this.name}-${this.age}-${this.state}`)
}

var Person5 = new personProto();

Person5.age = 24;
Person5.state = 'Goa';

console.log('name' in Person5);
console.log('names' in Person5);
console.log(Person5.hasOwnProperty('name')); // property is shadow
Person5.name = 'Ansari';
console.log(Person5.hasOwnProperty('name')); // property is accessable

console.log(Person5.printPerson());