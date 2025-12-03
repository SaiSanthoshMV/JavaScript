
var a;

console.log(a);

if (a == undefined) {
    console.log("a is undefined");
} else {
    console.log("a is defined");
}

// undefined is a placeholder which is used to kept in memory, which indicates that variable is declared but not initialized

var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
a = "Namaste Javascript";
console.log(a); // Namaste Javascript

// javascript is a dynamically typed language, loosly packed i.e flexible with types

a = undefined; // not a good practice to assign undefined to a variable
console.log(a); // undefined
// this undefined is just used in js to use when no value is assigned to a variable