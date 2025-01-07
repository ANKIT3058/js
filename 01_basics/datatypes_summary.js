// Javascript is a dynamically typed language
/*
let a;
a=0;
console.log(typeof a);  -> number
a="Hello world";
console.log(typeof a);  -> string
a=true;
console.log(typeof a);  -> boolean
*/

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction); -> function
// console.log(typeof myObj);      -> object
// console.log(typeof heros);      -> object


// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) , heap(non-primitive)
// Everything created in heap, its reference is returned
// Everything created in stack, its copy is returned

let userOne = {
    username: "ankit",
    upi: "user@gmail.com"
}
let userTwo = userOne
userTwo.username="prabhakar"
console.log(userOne.username);
