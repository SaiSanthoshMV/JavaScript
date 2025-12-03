// jargons related to functions in JavaScript

// function statement - function declaration
function a() {
    console.log("inside a");
}

// function expression - functions can be assigned it to a variable as well
// here function acts as a value
var b = function () {
    console.log("inside b");
};

// difference between function statement and function expression is hoisting
a(); // works because of hoisting
b(); // TypeError - b is not a function


// anonymous function - function without a name
//function () 
{
    console.log("anonymous function");
} // SyntaxError - function statement requires a name

// but these can be used in function expressions
var c = function () {
    console.log("anonymous function in function expression");
};
c(); // works
// note- there can be a function without body as well - called as empty function


// named function expression
var d = function xyz() {
    console.log("named function expression");
    // xyz(); // works - can be called inside the function
};
d(); // works

// xyz(); // ReferenceError - xyz is not defined outside the function

// difference between parameters and arguments
function sum(x, y) { // x and y are parameters
    console.log(x + y);
}
sum(10, 20); // 10,20 are arguments

// parameters are variables listed in the function definition i. local variables only accesible in function scope
// arguments are the real values passed to the function


// First Class functions - first class citizens - ability to use functions as values
// 1. functions can be stored in variables
// 2. functions can be passed as arguments to other functions
// 3. functions can be returned from other functions

//ex1
var b = function (param1) {
    console.log(param1);
}

function xyz() {

}

b(xyz); // passing function as argument
// prints the function definition of xyz

//ex2
function pqr() {
    return function () {

    }
}

console.log(pqr()); // prints the function definition of the returned function

// let & const can also be used to define functions in function expressions
// arrow functions also follow the same rules as function expressions