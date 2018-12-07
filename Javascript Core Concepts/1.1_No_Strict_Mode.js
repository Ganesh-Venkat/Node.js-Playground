// 1.1
// Fail silently vs Explicit errors
function f() {
    'abc'.length = 5;
    console.log('abc'.length);
}

f();