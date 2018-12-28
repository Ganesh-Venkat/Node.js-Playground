// Declare a constant feathers that has the feathersjs module 
const feathers = require('@feathersjs/feathers');
// Execute / Call / Invoke this module & assign the return value 
// - assuming the feathers application object to app
const app = feathers();
// app.use is generally used (in context of express)
// to include middleware(custom/built-in) in your application at the APPLICATION level
// for the entire application
// Structure: app.use used to register Service objects, which form the core of Feathers.js
// on a path
// app.use(path, service) e to interact with ANY kind of data (Main e.g. crud on Database)
// other examples - file system, APIs, etc
// Register a service object on a given path
// A service is an object that provides a uniform interface to interact with 
// any kind of data (any service must implement atleast one of several given methods:
// e.g. find, create, delete, etc.)
// By default, provides some CRUD operations for that data
app.use('todos', {
    // code inside the curly braces seems to be the service
    // and this seems to be defining the get operation (read) of that service 
    async get(name) {
        return {
            // seems to be equivalent to name: name
            name,
            text: `You have to do ${name}`
        };
    }
});

async function getToDo(name) {
    // app.service('path')
    // Returns a wrapped service object at given path 
    // - normal service object that you registered 
    // some + Feathers functionality
    const service = app.service('todos');
    const todo = await service.get(name);
    console.log(todo);
    // my assumption is that the code here can run without waiting for the await result
    // only the stuff dependant on the result of await (todo) -> console.log(todo)
    // has to wait
}

getToDo('dishes');