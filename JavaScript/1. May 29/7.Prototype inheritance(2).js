// SubClass

var Job = function () {
  this.pays = true;
}

Job.prototype.print = function () {
  console.log(this.pays ? 'Please Hire Me' : 'No Thanx');
}

var TechJob = function (title, pays) {
  Job.call(this); // doesn't inherit thier prototype
  this.title = title;
  this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;


// Overriding in Prototype Chain 
// this method found first and execute(shadow upper method) || if not find will search in super(upper) class
TechJob.prototype.print = function () {
  console.log(this.pays ? 'Please Hire Me :-(' : 'No ThankYou :-)');
}

var Software = new TechJob('JavaSCript', true)

console.log(Software.print())
Software.pays = false;
console.log(Software.print())



// Adding prototype to Master Object

Object.prototype.printX = function () {
  console.log('I am Object Master of the JavaScript' );
}
console.log(Software.printX())