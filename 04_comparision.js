// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

// Comparison between two different datatypes
// console.log("2" > 1)  // true
// console.log("02" > 1) // true
// console.log("-2" > 1) // false


/*
Equality check == and Comparisons '> < <= >= ' works diffently.
Comparisons convert null to a number, treating it as 0.
That's why null >= 0 is 'true' and null > 0 is 'false'
*/

/* we should avoid the below type of conversion because of code readability and Clean code */

console.log(null > 0)  // false
console.log(null == 0) // false
console.log(null >= 0) // true

console.log(undefined == 0) // false
console.log(undefined > 0)  // false
console.log(undefined >= 0) // false

/*
    Strict check
    uses '===' operator.
    It checks values as well as it's datatype associated with it
*/

console.log("2" == 2)  // true
console.log("2" === 2) // false