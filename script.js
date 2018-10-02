/* Lecture: let and const
// In ES5 var are function scoped, while in ES6 are block scoped {} is a new block!
// You need to define variables foirst before using them, in es5 they are hoisted but
// it gives you undefined, in ES6 it gives error.
// ES6
//-------Blocks and IIFEs - immediately invoked function expressions, in ES6 we have blocks------
// {
//   const a = 1;
//   let b = 2;
// }
// // -------ES5 IIFEs-------
// (function() {
//   var c = 3;
// }());
*/
/*
let name6 = 'jane Smith';
const age6 = 23;
name6 = 'Miller';
console.log(name6, age6);
*/
// function driversLicense6(passedTest) {
//   let firstName;
//   const yearOfBirth = 1990;
//
//   if (passedTest) {
//     firstName = 'John';
//   }
//   console.log(`${firstName}, born in ${yearOfBirth}, is now officially allowed to drive a car.`);
// }
//
// driversLicense6(true);
//
// let i = 23;
//
// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
//
// console.log(i);
// Blocks ES6
// -------Strings in ES6 - template literals-------
const firstName = 'John';
const lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2018 - year;
}
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);
// New methods in ES6
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
// -------Arrow functions-------
const years = [1990, 1965, 1982, 1937];
// ES6
// One argument in single line of code
let ages6 = years.map(el => 2018 - el);
console.log(ages6);
// More arguments in single line of code use ()
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);
// If more than one line after arrow then {} need to be included with return at the end
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
// ES5
// var ages5 = years.map(function(el) {
//   return 2016 - el;
// });
// console.log(ages5);
