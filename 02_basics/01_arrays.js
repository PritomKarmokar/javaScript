// array

const myArr = [0, 1, 2, 3, 4, 5, 6]

const myHeros = ["Batman", "Moonknight"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1])

// Array methods

// myArr.push(7) // Inserting an element at the back
// myArr.push(8) // Removing an element from the back
// myArr.pop()

// myArr.unshift(9) // Adding an element at the beginning, Suppose doing a todo list operation

// myArr.shift() // Removing an element from the beginning.


// console.log(myArr.includes(9)) // returns true if presented

// console.log(myArr.indexOf(9)) // returns -1 if value not presented

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log(myn2)