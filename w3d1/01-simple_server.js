// Net package vs HTTP package

const http = require('http');

// Create a local server to receive data from
const server = http.createServer((request, response) => {
  console.log(request.url)


  if(request.url === "/"){
    response.writeHead(200, { 'Content-Type': 'application/json' });
  
    return response.end(JSON.stringify({
      data: 'Hello World!'
    }));
  }
  
  if(request.url !== "/"){
    response.writeHead(418, { 'Content-Type': 'text/html' });
  
    return response.end("Resource not found!");
  }

});

server.listen(8000);

// HTTP RESPONSE CODES

// 20x => ALL GOOD | 200 OK | 201 Created |
// 30x => Redirect | 301 302 304 Not changed
// 40x => Resource not available / client fudged up | 404 Not Found | 403 Forbidden
// 50x => Server internal error / server fudged up

// JSON | XML