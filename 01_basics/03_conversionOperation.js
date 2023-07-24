let score = undefined

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)

// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "pritom" => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(typeof stringNumber)

// ******************* Operations ******************

let value = 3
let negValue = -value

// console.log(negValue)

// console.log(2 ** 3) // power operation
// console.log(2 % 3)  // remainder

let str1 = "hello"
let str2 = " pritom"

let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2) // 122 but expected value was 14
// console.log(1 + 2 + "2") // output value 32

// console.log( (3 + 4) * 5 % 3)

// console.log(+true); // 1 ; but this type of operations should be avoided
// console.log(+"") // 0 ; but this type of operations should be avoided

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // code reability should be high

// console.table([num1, num2, num3])

let gameCounter = 100
++gameCounter

console.log(gameCounter)

// Prefix and Postfix Operation

let x = 3
const y = x++ // Postfix

// Postfix operation increments and returns the value before increments

console.log(`Postfix operation, x : ${x}, y : ${y}`) // x : 4, y : 3

let a = 3
const b = ++a

// Prefix operation increments and returns the value after increments

console.log(`Prefix operation, a : ${a}, b : ${b}`) // a : 4, b : 4

// postfix and prefix operator further study : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

