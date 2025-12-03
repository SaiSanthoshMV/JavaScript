function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
}

console.log(multiply(5)); // 5

/*
In the following example, if no value is provided for b, its value would be undefined when evaluating a*b, and a call to multiply would normally have returned NaN. However, this is prevented by the second line in this example:
*/

// Example of closure with function parameters
function outside() {
    const x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

console.log(outside()(10)); // 20 (instead of 10)


// Example of arguments object
function myConcat(separator) {
    let result = ""; // initialize list
    // iterate through arguments
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result;
}

console.log(myConcat(", ", "red", "orange", "blue"));
// "red, orange, blue, "

console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// "elephant; giraffe; lion; cheetah; "

console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));
// "sage. basil. oregano. pepper. parsley. "