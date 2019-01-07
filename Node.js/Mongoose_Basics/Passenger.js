// 1. Import the mongoose package in my application (after downloading it using npm)
const mongoose = require('mongoose');

// 3. Define the passengers schema (define the structure of the user document in users collection) 
let passengerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    conductor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ('conductor')
    }
})

// 5. Export the model, for use by other scripts
module.exports = passengerSchema;