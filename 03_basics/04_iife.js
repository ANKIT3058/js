// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution ko hatane ke liye iife use krte hain

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; is very important here, otherwise TypeError

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')