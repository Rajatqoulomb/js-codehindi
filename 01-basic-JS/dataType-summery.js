// Premitive Datatype

// 7 types:- String, Number, Boolean, null, undefined, symbol, bigInt

// Example of this datatype
const nameOf = "Hello world"; //String Datatype
const countNumber = 123; //Number Datatype
const studyCondition = true; //Boolean Datatype
const isLoggedIn = false; 
const outsideTemp = null; //Null Datatype it return object datatype
const userEmail = undefined; //Undefined Datatype
// const id = symbol('123') symbol datatype
// const anotherId = symbol('123');
const scienceData = 2584587636915935n; //BigInt Datatype


// Reference (Non primitive)

// Array, Objects, Functions
const IndanHeros = ["Krish", "Shaktiman", "Naggraj"]; // Array Data type
// console.log(IndanHeros);
// console.log(typeof IndanHeros);
let myObjt = {                    // Object Data Type
    name: "My World",
    age: 80,
}

const myFunction = function(){                    // Function Data Type  it treturn object function
    console.log("Hello User");
}

//console.table([nameOf, countNumber, studyCondition, isLoggedIn, outsideTemp, userEmail, scienceData, IndanHeros, myObjt, myFunction]);
// Stack (primitive), Heap (Non-primitive)
//change value in object by this method
let userOne = {
    email:"abc@google.com",
    country: "India",
}

let userTwo = userOne

userTwo.email = "xyz@gmail.com"  // with dot change any value

console.log(userOne.email);
console.log(userTwo.email);
