// javascript code execution example
var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

square2 = square(square(n));
square4 = square(square(4));

console.log(square2);
console.log(square4);

// execution context -> memory (variable environment) , code (thread of execution)
// javascript is a synchronous single threaded language
// call stack -> function execution context
// start with global execution context