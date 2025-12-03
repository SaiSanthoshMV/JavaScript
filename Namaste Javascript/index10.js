// closure is the combination of a function bundled together (enclosed) with the lexical environment(references to its surrounding state).
// In other words, a closure gives you access to an outer function’s scope from an inner function.

function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z); // prints the function definition of y
z(); // prints 10

function z() {
    var b = 900;
    function x() {
        var a = 10;
        function y() {
            console.log(a + b);
        }
        y();
    }
    x();
}
z(); // prints 910