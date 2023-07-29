// Array in JavaScript

const myArr = [0, 1, 2, 3, 4, 5] // can contain a mix of different data types

/*
    Notes:
    Javascript array-copy operations creats 'shallow copies'.
    Shallow Copies means copy of an object whose properties share the same references.
    Whereas Deep Copies means copy of an object whose properties do not share the same references
*/

// console.log(myArr[1])

const myHeros = ["Karna", "Abhimanyu", "Meghnaad"]

// Another way of declaring arrays
const myArr2 = new Array(1, 2, 3, 4)


// Array methods

// myArr.push(6) // adding an element at the last
// myArr.push(7)
// myArr.pop()  // removing an element from the last
// console.log(myArr)

// myArr.unshift(9) // adding an element at the start, Suppose doing a todo operations
// console.log(myArr)

// myArr.shift() // removing an element from the start
// console.log(myArr)


// console.log(myArr.includes(9)) // returns 'true' if value is presented else 'false'

// console.log(myArr.indexOf(9)) // returns '-1' if value isn't presented else returns the index

// console.log(myArr.indexOf(3)) 

// const newArr = myArr.join() // 'join()' method binds and converts the array into 'string' format

// console.log(myArr)

// console.log(newArr)

// console.log(typeof newArr)


// slice , splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3) // last index isn't included

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log(myn2)

// splice() changes the original array whereas slice() doesn't but both of them returns array object.
// https://stackoverflow.com/questions/37601282/javascript-array-splice-vs-slices