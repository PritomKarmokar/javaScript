// singleton
// Object.create -- constructor method

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pritom",
    "full name": "Pritom Karmokar",
    [mySym]: "mykey1",
    age: 18,
    location: "Dhaka",
    email: "pk@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "pk@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "pk@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())