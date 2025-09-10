// import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today')

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    
    let dateVal = today.getDate();
    let hour = dateVal.getHours();
    let greeting;

    if (hour >= 6 && hour < 12) {
        greeting = "Good Morning!"
    
    } else if (hour >= 12  && hour < 18) {
        greeting = "Good Afternoon!"
    
    } else if (hour >= 18 && hour < 21) {
        greeting = "Good Evening!"
    
    } else if (hour >= 21 && hour < 24) {
        greeting = "Good Night"
    
    } else {
        greeting = "Hello, Late Night!"
    }

    res.end(`Hello, ${greeting} the current Brisbane time is ${dateVal}`);
}

// Define the port
const port = 8080;

// Create an http server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on specificed port
server.listen(port);
console.log("Server listening on port:" + port);