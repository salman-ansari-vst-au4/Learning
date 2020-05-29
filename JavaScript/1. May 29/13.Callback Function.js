let x = () => console.log`I am Full Stack Developer`;

let y = (cb) => {
  console.log`doing somethin`;
  cb();
}

y(x);

// why to use

let calc = (num1, num2, caclType) => {
  if (caclType === "add") {
    return num1 + num2;
  }
  else if (caclType === "mul") {
    return num1 * num2;
  }
}

console.log(calc(2, 3, 'add'));

// for large api adding method in function will not suitable

let add = (a, b) => a + b;

let mul = (a, b) => a * b;

let defaultCondition = (a, b) => {return {a, b}};

let calC = (num1, num2, cb = defaultCondition) => {
  return cb(num1, num2)
}

console.log(calC(2, 3, add));
console.log(calC(2, 3));
