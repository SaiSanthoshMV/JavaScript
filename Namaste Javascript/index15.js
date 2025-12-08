console.log("start");

setTimeout(function cb() {
    console.log("Callback function executed");
}, 5000);

console.log("end");

/* even if we set the timer to 0ms, the callback function will be executed only after the current execution context is done and the call stack is empty*/

console.log("Start");
document.getElementById("btn")
    .addEventListener("click", function cb() {
        console.log("Button clicked");
    });

console.log("End");

// even if we click the button immediately, the callback function will be executed only after the current execution context is done and the call stack is empty
console.log("Start");
setTimeout(function cbT() {
    console.log("CB SetTimeout");
}, 5000);

fetch("http://api.netflix.com"
    .then(function cbF() {
        console.log("CB Netflix");
    })
);

console.log("End");