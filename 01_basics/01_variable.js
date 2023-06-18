// camelCase, snake_case, PascalCase -- for variable declaration

const accountId = 14453
let accountEmail = "abcd@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka" // variable can be declared of this type but preferred not to use.
let accountState; // undefined will be stored 


// accountId = 2 // not allowed. 'const' variable cannot be changed. 

accountEmail = "bc@bac.com"
accountPassword = "54321"
accountCity = "ctg"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])