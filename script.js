/* Lecture: -------LET and CONST -------
// In ES5 var are function scoped, while in ES6 are block scoped {} is a new block!
// You need to define variables first before using them, in es5 they are hoisted but
// it gives you undefined, in ES6 it gives error.
// ES6

//-------BLOCKS and IIFEs - immediately invoked function expressions, in ES6 we have blocks------
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

// -------Strings in ES6 - TEMPLATE LITERALS-------
const firstName = 'John';
const lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2018 - year;
}
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

// -------New methods in ES6-------
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(firstName.repeat(5));
console.log(`${firstName} is my name`.repeat(5));
// -------ARROW FUNCTIONS-------
const years = [1990, 1965, 1982, 1937];
// ES6
// One argument in single line of code
let ages6 = years.map(el => 2018 - el);
console.log(ages6);
// More or none arguments in single line of code use ()
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);
// If more than one line after arrow then {} need to be included with return at the end
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);

// -------Biggest advantage of arrow functions - they don't have their own this keyword, they use 'lexical' this keyword--------
// ES5
// var ages5 = years.map(function(el) {
//   return 2016 - el;
// });
// console.log(ages5);
// ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     var self = this; //Need to create this to store this in a variable
//     document.querySelector('.green').addEventListener('click', function() {
//       var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//       alert(str);
//     })
//   }
// }
// box5.clickMe();
// Arrow function shares this keyword of its surroundings, doesnt' have its own this keyword!
const box6 = {
  color: 'green',
  position: 1,
  clickMe() { // Here you cant use arrow function because it wouldnt have its own this!
    document.querySelector('.green').addEventListener('click', () => {
      const str = `This is box number ${this.position} and it is ${this.color}`;
      alert(str);
    });
  },
};
box6.clickMe();

const friends = ['Bob', 'Jane', 'Mark'];

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends6 = function (friendsArray) {
  const arr = friendsArray.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
};

new Person('Mike').myFriends6(friends);

const array10 = [1, 2, 3, 4];
const [one, two, three, four] = array10;
console.log(array10);
console.log(one);
console.log(two);
console.log(three);
console.log(four);
// ------- DESTRUCTURING -------
// We can destructure a data destructure
const [name, age] /* with left side we destruct data structure */ = ['John', 26];
// With this here on the right we build data structure
console.log(name, age);
const obj = {
  firstName1: 'John',
  lastName1: 'Smith',
};
const { firstName1, lastName1 } = obj; // New variable names have to match the keys!
console.log(firstName1, lastName1);
const { firstName1: a, lastName1: b } = obj; // To give them different variable names
console.log(a, b);

function calcAgeRetirement(year) {
  const myAge = new Date().getFullYear() - year;
  return [myAge, 65 - myAge]; // This returns an array
}
// Now use destructuring to store this into different variables
const [ageCurrent, retirement] = calcAgeRetirement(1960);
console.log(ageCurrent);
console.log(retirement);

// -------ARRAYS-------
const boxes = document.querySelectorAll('.box'); // Queryselectorall returns node list not an array!
// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// });
// ----ES6 - FROM transforms nodelist into an array----
// Why can't I use arrow function without curly bracket and parentheses here?
Array.from(boxes).forEach((cur) => {
  const current = cur;
  current.style.backgroundColor = 'dodgerblue';
});

// Foreach and map cant break through the loop., es5 we have if statement and continue inside of it to skip it in for loop, to break or continue statements in a loop in ES6 use for of.

// -------FOR OF LOOP-------
// const boxesArr6 = Array.from(boxes);
// for (const cur of boxesArr6) {
//   if(cur.className.includes('blue')) {
//     continue;
//   }
//   cur.textContent = 'I changed to blue!';
// }
// // ES6 Defined index and defined methods
// const ages2 = [12, 17, 8, 21, 14, 11];
// console.log(ages2.findIndex(arrPosition => arrPosition >= 18));
// console.log(ages2.find(elValue => elValue >= 18));


// ------SPREAD OPERATOR-------
function addFourAges(e, f, g, h) {
  return e + f + g + h;
}
const fourAges = [18, 30, 12, 21];
// (...array) it expands the array into single components
const sum3 = addFourAges(...fourAges);
console.log(sum3);

const family1 = ['John', 'Jane', 'Chris'];
const family2 = ['Peter', 'Sarah', 'Ann'];
const bigFamily = [...family1, 'Lily', ...family2];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxesNode = document.querySelectorAll('.box');
// Spread operator works also on node list and other forms, not jusy arrays
const all = [h, ...boxesNode];
Array.from(all).forEach((cur) => {
  const current = cur;
  current.style.color = 'purple';
});

// ------Rest parameters-------
// exact oposite of spread operators
// ES5  arguments is a speciable variable available in all functions.
// var argumentsArray = Array.prototype.slice.call(arguments) to transform it into an array, it is object right now!
// Then loop through interval
// ES6 REST parameters
// First parameter can be any number of defined parameteres, after the ,... there we can have as many undefined oens we want
function isFullAge10(fullAge, ...yearsArray) {
  console.log(yearsArray);
  yearsArray.forEach(year => console.log((2016 - year) >= fullAge));
}
isFullAge10(21, 1990, 1999, 1986, 2012);
// Spread operator is used in a function call, while the rest operator is used in a function declaration

// ------- DEFAULT PARAMETERS -------
// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//   nationality === undefined ? nationality = 'USA' : nationality;
//
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }
//
// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
// ES6
function SmithPerson(firstname, yearOfBirth6, lastName6 = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName6 = lastName6;
  this.nationality = nationality;
}

const john = new SmithPerson('John', 1987);
const emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(john);
console.log(emily);
