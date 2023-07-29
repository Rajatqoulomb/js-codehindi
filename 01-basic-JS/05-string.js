"use strict";

const myName = "Rajat"
const surName = " Shrivastav"
//console.log(myName + surName + " Indore");  // This is old representaion formate

console.log(`My First name is ${myName} and Surname is ${surName}.`);     //(`` this is backticks new kind of formate to use in console for print value)
// This is modern syntax called "string interpulation"

const gameName = new String('Hello World')

const secondGame = gameName
console.log(gameName[0]); // Access key value
console.log(gameName.__proto__); // Access prototype
console.log(gameName.length); // Access lenght they all are Method
console.log(gameName.toUpperCase());  // Access Upper Case
console.log(gameName.charAt(3));
console.log(gameName.indexOf('o'));
console.log(gameName.toLowerCase());


// slice ke liye

const newGame = gameName.substring(0, 5)
console.log(newGame);
const newGame2 = gameName.slice(0, 5)
console.log(newGame2);

const newStringOne = "         Hello           "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://powerhub.com/powerhub%20blog"

url.replace('%20', '-')
console.log(url.replace('%20', '-'));
