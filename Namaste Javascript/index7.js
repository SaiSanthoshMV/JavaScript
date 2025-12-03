
function a() {
    var b = 10;
    function c() {
        console.log(b);
    }
}

a();
console.log(b);

// b is not accessible here because of lexical scoping
// b is defined in a's local memory and c is also defined in a's local memory

// when we try to c=acces b in c() , it looks for b in its lexical environment first, then to a(b's parent), then to global -> scope chain
// so c can access b due to lexical scoping

// lexical -> order -> hierarchy
// lexcal environment -> local memory + lexical environment of its parent
