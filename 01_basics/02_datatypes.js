"use strict";
/*
The "use strict"; directive is used in JavaScript to enable strict mode,
a feature introduced in ECMAScript 5 (ES5).
*/

/*
alert( 3+3 )
->alert() is specific to browsers and depends on the Web APIs they provide
->The JavaScript engine (like V8) provides the foundation,
  but the environment (browser or Node.js) determines the APIs available to you.
*/

/*
number => -2e53 to 2e53-1
bigint
boolean => true/false
null => standalone value
undefined
string
symbol => unique (mostly useful in react)

object
*/

console.log(typeof null) // object
console.log(typeof undefined) // undefined