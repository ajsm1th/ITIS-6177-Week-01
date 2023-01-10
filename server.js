// Importing the http module
const http = require("http")
  
// Creating server 
const server = http.createServer((req, res) => {
    // Sending the response
    res.write("Hello World")
    res.end();
})
  

