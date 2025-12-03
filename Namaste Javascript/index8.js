console.log("hi");
console.log(a);

let a = 10;

var b = 100;

// till the time 'a' is declared and initialized, it is in temporal dead zone
// so accessing 'a' before initialization will throw reference error: can't access 'a' before initialization

// 'b' is hoisted and initialized with 'undefined', so accessing 'b' before initialization will give 'undefined'

console.log(window.a); // undefined , as these let & const variables are not added to window object, added to script object

/*

let a;
a = 20; // valid : you can just declare & assign value to it later

*/

/*

let a = 10;
let a = 20; // invalid

*/
// SyntaxError: Identifier 'a' has already been declared
// let varibales are cannot be redeclared in the same scope

/*

const a;
a = 10; // invalid

*/
// SyntaxError: Missing initializer in const declaration

/*

const b = 100;
b = 10000; // invalid

// TypeError: Assignment to constant variable.
// const variables cannot be reassigned

*/

/*

console.log(b);
const b = 100;

// ReferenceError: Cannot access 'b' before initialization
*/

/*
console.log(x);

// ReferenceError: x is not defined
*/
// recommended to keep const -> let -> var to avoid confusion and errors
// 