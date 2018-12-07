// Outputs: "Yes!"
isItHoisted();

function isItHoisted() {
    console.log("Yes!");
}

// Function expressions in JavaScript are NOT hoisted.
notHoisted() // TypeError: notHoisted is not a function
const notHoisted = function() {
  console.log('foo')
}

// A subtle detail (that can show up in code with multiple "duplicate" declarations) is that 
// Functions are hoisted first, and then variables (YDKJS reference)
