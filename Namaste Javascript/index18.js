const radius = [3, 1, 2, 4];

// Calculate area of circles
const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return Math.PI * 2 * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// higher order functions are functions which take other functions as arguments or return functions as output

// callbacks are functions which are passed as arguments to other functions and are invoked inside the outer function

// examples of higher order functions inbuilt in js: map, filter, reduce, forEach, sort, etc.

// other implementation of map function

Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));