// 1. Import my user model
const userModel = require('./user');
// 2. Elementary CRUD operations using mongoose
async function saveUser() {
    const user = new userModel({
        name: "Ganesh Sundar",
        address: [
            {
                street: "307, Govindan Nagar Colony", 
                city: "Srivilliputtur",
                country: "India"
            },
            {
                street: "Silicon Valley",
                city: "San Jose",
                country: "USA"
            }
        ]
      });
    const result = await user.save();
    console.log(result);
}
async function getAllUsers() {
    const result = await userModel.find();
    console.log(result);
}
async function updateUser(id) {
    // I think find can specify one of the properties as it's params
    const user = await userModel.findById(id);
    if (!user) 
        return;
    user.address = "Wonderland";
    const result = await user.save();
    console.log(result);
}
async function deleteUser(id) {
    const result = await userModel.deleteOne({ _id: id })
    console.log(result);
} 
//saveUser();
getAllUsers();
//updateUser("5c2c7d999d2c5b315f14458c");
//deleteUser('5c2c7d999d2c5b315f14458c');

// Question: Isn't this essentially blocking? Because, we wait for Aync operation. 
// All the code that follows inside the function block is async. Perhaps the code after the function is called 
// Will execute in the meantime