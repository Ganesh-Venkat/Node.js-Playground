// 1. Import the mongoose package in my application (after downloading it using npm)
const mongoose = require('mongoose');
const addressSchema = require('./address');
// 2. Connect to the database on the local server named mongo-users
mongoose.connect('mongodb://localhost:27017/mongo-users', {useNewUrlParser: true})
    .then(() => {
        console.log('You are now connected to Mongo!');
        return 'You are now connected to Mongo!';
    })
    .catch(err => console.error('Something went wrong', err));
// 3. Define the users schema (define the structure of the user document in users collection) 
const userSchema = new mongoose.Schema({
    name: String,
    address: [addressSchema]
}); 
// 4. Create a model using our defined schema (By convention, mongodb auto looks for plural of singular name mentioned in model: 'User')
// 5. Export the model, for use by other scripts
module.exports = mongoose.model('user', userSchema)
