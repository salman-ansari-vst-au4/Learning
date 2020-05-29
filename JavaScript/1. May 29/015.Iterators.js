// arrays are iterators and objects are not

// Sets, Weak Sets, Maps, Weak Maps

// Sets accept unique value

let mySet = new Set([1, 1, 2, 3, 1, 2, 1, 4, 3]);

console.log(mySet)

for (let val of mySet) {
  console.log(val)
}

let anObject = {
  name: 'Salman',
  age: 23,
  friends: ['Sharukh', 'Amir', 'Sonu Sood'],
  getName: function () {
    return this.name;
  }
}

for (let key in anObject) {
  console.log(`${key} : ${anObject[key]}`)
}

let myArray = [1, 2, 3, 4, 5];

let iterator = myArray[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());