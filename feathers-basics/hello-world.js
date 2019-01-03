// 1. Import feathers module into your program
const feathers = require('@feathersjs/feathers');
// 2. Use feathers inside your application
const app = feathers();
// 3. Create a Hello World service object (class , instantiate)
/* 
This is a simple data interface with 
 1) create & 2) find operations
 Name + Greeting
*/
 class HelloWorldService {
    // constructs the initial state of the object 
    constructor() {
        this.names = []
    }
    // implemented methods should either 
    // a) return a Promise b) async function
    async create(data, params) {
        // Why isn't params used here?
        // assump: data is an object that contains all the data that you pass
        const name = data.name; 
        this.names.push(name);
        // What is the significance of this in this method?
        return this.holidayGreeter(name);
    }

    async find(params) {
        // Why am I using a map here?
        // Guess is functional programming map, red concept
        return this.names.map(this.holidayGreeter);
    }

    holidayGreeter(name) {
        return `Merry Christmas, ${name}!`;
    } 
} 
// 4. Register my service object: create an object, register at specified path 
app.use('hello', new HelloWorldService()); 

// 5. Use the registered service object
const helloService = app.service('hello');
// 6. Additional code for user to interact with the CLI
const readline = require('readline').createInterface(process.stdin, process.stdout)

readline.setPrompt("What's your name?: ")
readline.prompt()

readline.on('line', name => {
    const response = name === 'everyone' ?
        helloService.find().then(hellos => hellos.forEach(hello => console.log(hello))) :
        helloService.create({ name }).then(hello => console.log(hello))
    response.then(() => readline.prompt())
})