// setTimeout example with closure
function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log("Namaste Javascript");
}
x();

// prints "Namaste Javascript" immediately
// prints 1 after 3 seconds delay

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}
x();

// prints 6 five times after every 1 second interval
// because var is function scoped and by the time the callbacks are executed the loop is already over and i is 6

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}
x();
// prints 1,2,3,4,5 after every 1 second interval
// because let is block scoped and each iteration of the loop creates a new binding of i which is preserved in the closure created by the callback function

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
}
x();
// prints 1,2,3,4,5 after every 1 second interval
// here we created a new function close which takes i as argument and each time close is called a new binding of i is created which is preserved in the closure created by the callback function