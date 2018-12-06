/* 
   Hoisting in JavaScript is a feature in which the interpreter moves the function and variable declarations
   to the top of their containing scope.

   Note: Hoisting only moves the declaration, NOT the assignment
*/

function foo() {
    console.log(tmp); // undefined
    if (false) {
        var tmp = 3;  
    }
}

// becomes this ...
/* 
function foo() {
    var tmp;  // declaration is hoisted
    console.log(tmp);
    if (false) {
        tmp = 3;  // assignment stays put
    }
}
*/

// let and const declarations are not hoisted!
// Technically they are hoisted, but they are NOT initialized to anything (var is initialized to undefined).
console.log(a); // undefined
var a = 2;
console.log(c); // Uncaught ReferenceError: c is not defined
let c = 2;

/*
Specific scope = less errors + improved readability/maintainability. 
TLDR: var -> trash, const where you can, otherwise let's cool too! 
*/


