function* generator() {// |* | | * | | *|
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let iterators = generator();

console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());
console.log(iterators.next());

function * infiniteMaker() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

let count = infiniteMaker();
console.log(count.next());

// genrator inside genrtor

function* generator1() {
  yield 1;
  yield * generator2() ;
  // return 'will end the generator'
  yield 3;
}

function* generator2() {
  yield 2;
}

let test = generator1();

console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());