// 1.1
// Fail silently vs Explicit errors
function f_strict() {
    'use strict';
    'abc'.length = 5;
}

f_strict();