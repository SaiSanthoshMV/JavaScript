// hoisting example

getName();
console.log("var x:" + x); // undefined
console.log(getName);
console.log("getName2 :" + getName2); // undefined

function getName() {
    console.log("Namaste Javascript");
}

var getName2 = () => {
    console.log("Namaste Javascript 2");
}

getName2();
var x = 5;

// variables and arrow functions are hoisted differently with undefined memory allocation
// function declaration are hoisted with declaration and definition