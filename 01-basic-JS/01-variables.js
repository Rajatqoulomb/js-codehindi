const accountId = 32369 // this is a constant variable keyword which is used one time, you can not change it //
let accountEmail = "rajat.qoulomb@gmail.com"
var accountPassword = "124578" // not use var keyword because in this keyword facing scope problem it change all variable if you change one//
accountCity ="Indore"
let accountState;
/* Prefer not to use var
because of issue in block scope and functional scope
*/

//accountId = 2 // not allowed same constant variable

console.log(accountId); // single print result code

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) //Used for multiple variable print in one line