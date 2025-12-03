var a = 10;

function b() {
    var x = 10; // local varibale will not be in window object
}

console.log(a);
console.log(window.a);
console.log(this.a);

// this points to the object that is calling the function
// this === window in the global context in browsers
// this changes when call stack changes