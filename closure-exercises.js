
// 1. Write a function named hello3x that returns a function. 
// The returned function should return "hello" only the first 3 times it's run, then "".

const hello3x = () => {
  let counter = 0;
  return () => {
    counter ++;
    if( counter <= 3) {
      return 'hello';
    }
    return '';
  }
}

let test = hello3x();

// Test for number 1

// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());
// console.log(test());


// 2. Write a function named helloFunction that returns a function
// every time moreHello is called, one more "hello" will be appended to variable b.

const helloFunction = () => {
  let counter = 0;
  return () => {
    counter ++;
    return 'hello'.repeat(counter);
  }
}

const moreHello = helloFunction();

// Test for number 2

// console.log(moreHello());
// console.log(moreHello());
// console.log(moreHello());
// console.log(moreHello());
// console.log(moreHello());
// console.log(moreHello());

// 3. Write a function named lessThan that returns a function:

const lessThan = (firstValue) => {
  return (secondValue) => secondValue < firstValue
}

const youngerThanPatts = lessThan(31);
let leo = youngerThanPatts(6);
let ruth = youngerThanPatts(46);

const smallerThan = lessThan(2)
let b = smallerThan(3) // b is false, because 3 is not smaller than

// Test for number 3

// console.log(b);
// console.log(leo);
// console.log(ruth);

// 4. Write a function named callWith that takes a number and returns a function. 
// The returned function takes in a function as its parameter and invokes it with the number as argument.

const callWith = (number) => {
  return (  func ) => {
    return func(number);
  }
}

const fun = callWith(10)
let bb = fun((num) => {
  return num + 5
})

console.log(bb);

// 5. 5. Write a function named `runIt` that takes in a function as a 
// parameter and returns the function.

const runIt = (func) => {
  return (b, c) => func( b, c);
}

console.log(runIt);

const subtract = runIt((a, b) => {
  return a - b
})

let ab = subtract( 5,  3 );

console.log(ab);