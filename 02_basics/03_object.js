// singleton object is created when we create object using constructor
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ankit",
    "full name": "Ankit Anand",
    [mySym]: "mykey1", // using mySym as a symbol, printed as [Symbol("key1")]: "mykey1"
    age: 18,
    location: "Jaipur",
    email: "ankit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])
// console.log(typeof mySym);


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());