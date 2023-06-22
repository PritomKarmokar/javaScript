const name = "pritom"
const repoCount = 10

// console.log(name + repoCount + " Value") // this approach is kind of outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // modern method. 'string interpolation' is used

// another way of declaring 'string'

const gameName = new String('Chess-game')

// console.log(gameName) // [String: 'Chess-game']
// console.log(gameName[0]) // 'C'
// console.log(gameName.__proto__) // {}


// console.log(gameName.length)
// console.log(gameName.toUpperCase()) // 'CHESS-GAME'

/*
    Original value wasn't modified since 'string' is primitive datatype
    (call by value) hence no reference was passed
*/


// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('s')) // returns the first occurrence of that 'char'. If character is not present returns '-1'

console.log(gameName.split('-'))

const newString = gameName.substring(0, 4) // last index position is not included ang 'negative indexing' is not possible
// console.log(newString)


const anotherString = gameName.slice(0, 5) // last index position is not included
//console.log(anotherString)      // 'Chess' 

const anotherString2 = gameName.slice(-10, 5) 
// console.log(anotherString2)     // 'Chess' 

// further study link on 'slice' method : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const newStringOne = "    Pritom    "

// console.log(newStringOne)
// console.log(newStringOne.trim()) // removes starting and ending space

// further study link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://pritom.com/pritom%20karmokar"

console.log(url.replace('%20', '-')) // https://pritom.com/pritom-karmokar

console.log(url.includes('pritom')) // true

console.log(url.includes('sundar')) // false

console.log(url.includes('/pritom')) // true

// Need to further study on different string methods