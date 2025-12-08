// what is callback function

setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x function");
    y();
}

function y() {
    console.log("y");
}
x(y); // y is callback function

// deep dive into event listeners
/*
let count = 0;
document.getElementById("ClickMe").addEventListener("click", function () {
    console.log("button clicked", ++count);
})*/

// here the anonymous function is the callback function which will be called when the click event happens

// closures demo with event listeners

function attachEventListener() {
    let count = 0;
    document.getElementById("ClickMe").addEventListener("click", function xyz() {
        console.log("button clicked", ++count);
    });
}

attachEventListener();

// scope demo with event listeners

// garbage collection and removeEventListener
// good programmers always remove event listeners when not needed anymore to avoid memory leaks, as event listeners hold references to the outer function's variables via closures (the event listeners are heavy on memory)
// after the function call is over, if there are no references to the inner function, then the outer function's variables can be garbage collected
