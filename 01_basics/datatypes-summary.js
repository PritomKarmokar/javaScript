/* 
    JavaScript is 'dynamically typed' or 'loosely typed' language
    because data type is automatically assigned at the time of compilation or code execution
*/

/* 
    How data can be stored and accessed based on that two basic datatypes -> 01. Primitive 02. Non Primitive
*/


//  Primitive - call by value

// 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // no value assigned hence 'undefined'

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 345391019391919n

// console.log(typeof bigNumber)  // bigint

// console.log(typeof outsideTemp) // object



// Reference (Non primitives)

// Array, Objects, Functions

const heros = ["spiderman", "moonknight", "batman"]

let myObj = {
    name: "hitesh",
    age: 22
}

// console.log(typeof heros) // object

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction) // function


// further study link : https://262.ecma-international.org/5.1/#sec-11.4.3
