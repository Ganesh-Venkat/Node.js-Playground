// 1.0 
// No auto-created global variables
// This will throw an error
'use strict';
x = 3.14;  // var x = 3.14 is correct
console.log(x);

function f_strict() {
    'use strict';
    'abc'.length = 5;
}