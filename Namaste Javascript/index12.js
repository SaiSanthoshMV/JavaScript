//  closure interview questions
/*
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    // let a = 10; // also works
    return inner;
}
outer()(); // 10

var fun = outer();
fun(); // 10

function outer(b) {
    var a = 10;
    function inner() {
        console.log(a, b);
    }
    return inner;
}

outer("hello")(); // 10 "hello"

function outest() {
    var x = 10;
    function outer(y) {
        function inner() {
            var z = 30;
            console.log(x, y, z);
        }
        return inner;
    }
    return outer;
}
let a = 100;
var close = outest()("hello");
close(); // 10 "hello" 30

// data hiding encapsulation using closures
function counter() {
    var count = 0; // private variable
    return function () {
        count++;
        console.log(count);
    };
}

var counter1 = counter();
counter1(); // 1
counter1(); // 2

var counter2 = counter();
counter2(); // 1
counter2(); // 2
counter2(); // 3
// counter1 and counter2 have separate count variables

// making this more scalable
// using this keyword and constructor function
function Counter() {
    var count = 0; // private variable
    this.increment = function () {
        count++;
        console.log(count);
    };
    this.decrement = function () {
        count--;
        console.log(count);
    };
}

var myCounter = new Counter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement(); // 1
*/
// myCounter.count is undefined


// garbage colection and closures

function a() {
    var x = 10, y = 20;
    return function b() {
        console.log(x)
    }
}

var fun = a();
fun(); // 10
// y is eligible for garbage collection as it's not used in inner function b
// in modern JS engines, only variables which are used in inner function are retained in memory
// others are garbage collected to optimize memory usage