let string;

let name = "Salman",
  age = 23;

string = 'hello my name is' + name + '\n I am ' + age + ' years old';

console.log(string);

string = `hello my name is ${name}
I am ${age} years old`;

console.log(string);

console.log(`${2 + 3}`)

// tagged templates

let tagged = (strArray, ...vals) => {
  console.log(strArray);
  console.log(vals);
}
let one = 1, two = 2;

tagged`adding ${one} and ${two} gives me ${one + two}`;

// startWith/endWith/includes/repeat/raw

console.log(string.startsWith('hell'));  // true
console.log(string.startsWith('helld')); // false

console.log(string.endsWith('old')); // true
console.log(string.endsWith('dkhjs')); // false

console.log(string.includes('3')); // true
console.log(string.includes('32')); // false

console.log("*".repeat(10));