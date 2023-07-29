// Dates object in JavaScript

let myDate = new Date() // It will provide current time and date
console.log(myDate) // But this is not readable

console.log(myDate.toString()) // Adding 'toString()' method makes it readable

console.log(myDate.toDateString())

console.log(myDate.toLocaleString())

console.log(typeof myDate) // Date() is defined as 'object'


// Creating a specific time and date
// let myCreatedDate = new Date(2023, 0, 23) // 'months' starts from 0 in javaScript
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // Specifying 'hours' and 'minutes'
// let myCreatedDate = new Date("2023-01-14") // Specifying 'yy-mm-dd' format
let myCreatedDate = new Date("01-14-2023") // Specifying 'dd-mm-yy' format
console.log(myCreatedDate.toLocaleString())

// Specifying current timestamp
let myTimeStamp = Date.now()
console.log(myTimeStamp) // milliseconds value from now to 1970 january 1

console.log(myCreatedDate.getTime()) // convert the 'dates' into milliseconds format from 1970 january 1

// Converting the milliseconds into seconds
console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()) // Getting only 'months' value. Months starts from 0
console.log(newDate.getDay()) // Getting only 'days' value. Days starts from 'Monday'

// Customizing date format
newDate.toLocaleString('default',{
    weekday: "long"
})

// further study: https://www.w3schools.com/js/js_dates.asp 
