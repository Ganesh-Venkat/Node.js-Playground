// 1.1
// Fail silently vs Explicit errors
'use strict';
function f_strict() {
    'abc'.length = 5;
}

f_strict();