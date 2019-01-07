// 1. Import the mongoose package in my application (after downloading it using npm)
const mongoose = require('mongoose');
const passengerSchema = require('./Passenger');
// 2. Connect to the database on the local server named mongo-users
mongoose.connect('mongodb://localhost:27017/busdata', {useNewUrlParser: true})
    .then(() => {
        console.log('You are now connected to MongoDB!');
        return 'Success';
    })
    .catch(err => console.error('Something went wrong'));
// 3. Define the conductors schema (define the structure of the user document in users collection) 
let conductorSchema = mongoose.Schema({
    name: String,
    yearsOfExperience: Number
});
// 4. Create a model using our defined schema (By convention, mongodb auto looks for plural of singular name mentioned in model: 'User')
const conductorModel = mongoose.model('conductor', conductorSchema);
const passengerModel = mongoose.model('passenger', passengerSchema);
async function createConductor(name, yearsOfExperience) {
    const sampleConductor = new conductorModel({
        name,
        yearsOfExperience
    });
    const result = await sampleConductor.save();
    console.log(result);
}
async function createPassenger(firstName, lastName, conductor) {
    const samplePassenger = new passengerModel({
        firstName,
        lastName,
        conductor
    })
    const result = await samplePassenger.save();
    console.log(result);
}
async function listPassengers() {
    const passengers = await passengerModel
        .find()
        .populate('conductor', 'name-_id')
        .select('firstName lastName conductor');
    console.log(passengers);
}

let conductorName = "Ganesh"; 
//createConductor(conductorName, 7);
//createPassenger('Robert', 'Downey', '5c2db970d23ffa21a7cfc04c');
listPassengers();