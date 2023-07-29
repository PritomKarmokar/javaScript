const marvel_heros = ["thor", "Ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// Pushing 'dc_heros' into 'marvel_heros'
// marvel_heros.push(dc_heros) // Creates an array within another array

// console.log(marvel_heros)

// console.log(marvel_heros[3])

// Merging two arrays properly using 'concat'
const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros)

// Merging two arrays using 'spread operator'
const all_new_heros = [...marvel_heros, ...dc_heros] 

// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // returns a new flatten array

console.log(real_another_array)

console.log(Array.isArray("Hitesh")) // checking if the "Hitesh" is an array or not

console.log(Array.from("Hitesh")) // converting "Hitesh" into an array

// interesting
console.log(Array.from({name: "Hitesh"})) // It will return 'null' since we don't specify what values to convert into an array 'key' or 'value'

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))