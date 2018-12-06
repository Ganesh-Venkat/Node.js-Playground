    // Scoping is determining where variables, functions, and objects are accessible in your code during runtime
    // Declaring a variable without var - auto creates a global variable - unwanted behavior is disabled in strict mode.

    function foo() {
        var x = 3;
        if (x > 0) {  
            // The scope of a variable is always the complete function (as opposed to the current block)
            var tmp = -x;
        }
        console.log("Var: " + tmp);  // 3
    }
    foo();

    // let variables are block-scoped
    // `let`, is a signal that the variable may be reassigned
    let i = 0;
    if (true) {
        let i = 1;
    }
    console.log("Let: " + i); // 0
    
    /*
    // const variables are also block scoped
    // `const` is a signal that the identifier won’t be reassigned

    const i = 0;
    i = 1; // SyntaxError: Identifier 'i' has already been declared

    const i; // SyntaxError: Missing initializer in const declaration
    */



    
