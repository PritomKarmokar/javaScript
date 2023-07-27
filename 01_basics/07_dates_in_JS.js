// Dates

let myDate = new Date()

// console.log(myDate) // couldn't understand properly

// console.log(myDate.toString())

// Output will be changed based on the current date and time

// console.log(`toISOString() : ${myDate.toISOString()}`) // 2023-07-27T07:38:38.466Z

// console.log(`toDateString() : ${myDate.toDateString()}`) // Thu Jul 27 2023

// console.log(`toLocaleDateString() : ${myDate.toLocaleDateString()}`) // 7/27/2023

// console.log(`toLocaleString() : ${myDate.toLocaleString()}`) // 7/27/2023, 7:41:31 AM

// console.log(typeof myDate) // object

// let myCreatedDate = new Date(2023, 0, 23) // Month starts from 0

// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)

// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2023-01-14") // yy-mm-dd format

let myCreatedDate = new Date('01-14-2023') // mm-dd-yy format

console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)

console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))


let newDate = new Date()

console.log(newDate)

console.log(newDate.getMonth() + 1) // months starting from 0

console.log(newDate.getDay())

newDate.toLocaleDateString('default', {
    weekday: "long",
})