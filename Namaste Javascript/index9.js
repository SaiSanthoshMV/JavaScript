// block is a group of javascript statements enclosed in curly braces {}
// we need to group statements as we can use multiple statements in places where javascript expects only one statement i.e in if conditions, loops, functions etc

// block scope means what are the varibales, functions which can be accessed inside a block

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
console.log(a); // 10
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined
// var is function scoped or globally scoped , not block scoped
// let & const are block scoped

// shadowing is when we have a variable with same name in parent & child scopes 
// in such cases child scope variable shadows the parent scope variable
// var does not have block scope so it cannot shadow parent scope variable in child block scope
// let & const can shadow parent scope variable in child block scope

var x = 100;
let y = 200;
const z = 300;
{
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
}
console.log(x); // 10
console.log(y); // 200
console.log(z); // 300

// example to show var is function scoped
var c = 100;
function fun() {
    var c = 10;
    console.log(window.c); // 100
    window.c = 20;
}
fun();
console.log(window.c); // 20

// in the above example if var was block scoped then c inside fun() would not have affected window.c

//  illegal shadowing examples

/*
let a = 10;
{
    var a = 20; // SyntaxError: Identifier 'a' has already been declared
}
*/

// but we can do this with var in parent & let/const in child
var a = 10;
{
    let a = 20;
    console.log(a); // 20
}
// since var will cross/interfere the boundary of block scope 

// we can also do this with var in parent & var in child block
var a = 10;
{
    var a = 20;
    console.log(a); // 20
}
console.log(a); // 20

/*
// let in parent , let in child block is valid shadowing
let a = 10;
{
    let a = 20;
    console.log(a); // 20
}
console.log(a); // 10

// const in parent , const in child block is valid shadowing
const a = 10;
{
    const a = 20;
    {
        const a = 30;
        console.log(a); // 30
    }
    console.log(a); // 20
}
console.log(a); // 10

// const in parent , let in child block is valid shadowing
const a = 10;
{
    let a = 20;
    console.log(a); // 20
}
console.log(a); // 10

// let in parent, var inside a function in child block is valid shadowing
let a = 10;
function fun() {
    var a = 20;
    console.log(a); // 20
}
fun();
console.log(a); // 10

*/
