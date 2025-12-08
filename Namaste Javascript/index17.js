comsole.log("Start");

setTimeout(function cb() {
    console.log("Timer is done");
}, 5000);

console.log("End");

let start = new Date();
let end = start;

while (end < start + 10000) {
    end = new Date();
}

console.log("While loop is done");


console.log("Start");

setTimeout(function cb() {
    console.log("Timer is done");
}, 0);

console.log("End");

// even if we set the timer to 0ms, the callback function will be executed only after the current execution context is done and the call stack is empty
// concurrency model in js is we should not block the main thread, only one call stack, java is single threaded