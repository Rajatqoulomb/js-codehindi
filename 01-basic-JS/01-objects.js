

// object literals
Object.create // ye constructor tarika hai 
const JsUser = {
    name: "NewJS User",
    typeStudent: "beginer",
    age: 20,
    email: "user@abcmail.com",
}

// console.log(JsUser);
// console.log(typeof JsUser);
// console.log(`Hello Js User you are a new, ${this.name}`);


// singleton constructor se banta hai

// how to combine variable in object

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);
const obj3 = {...obj1, ...obj2}
console.log(obj3);
