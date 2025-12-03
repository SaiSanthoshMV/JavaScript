var x = 1;
a();
b();
c();
console.log(x); // 1

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

function c() {
    console.log(x); // 1
}


// each function has its  individual execution context
// this starts with global execution context -> a()->b()->c() -> gec -> end
// execution context has their own local memory and global memory access
// variable lookup happens in local memory first if not found then looks in global memory
// after a function is executed its execution context is removed from the call stack

/*

var x = 1;
console.log(x);
{
    var x = 10;
    console.log(x);
}

{
    console.log(x);
}

{
    var x = 100;
    console.log(x);
}

console.log(x);

*/