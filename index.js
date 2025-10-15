var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<!doctype html><html><head><title>My Page</title></head><body><h1>Hello My Friend!</h1><p>This is my very small node.js application.</p></body></html>");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 