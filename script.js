// Lecture: let and const
// In ES5 var are function scoped, while in ES6 are block scoped {} is a new block!
// You need to define variables foirst before using them, in es5 they are hoisted but
// it gives you undefined, in ES6 it gives error.
// ES6
/*
let name6 = 'jane Smith';
const age6 = 23;
name6 = 'Miller';
console.log(name6, age6);
*/
function driversLicense6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(`${firstName}, born in ${yearOfBirth}, is now officially allowed to drive a car.`);
}

driversLicense6(true);

let i = 23;

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

console.log(i);
