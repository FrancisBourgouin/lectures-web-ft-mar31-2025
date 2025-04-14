// HTTP Server w/ Routing
const http = require("http");

const users = {
  1: {
    name: "Patator 🥔",
    email: "patate@rotie.com",
  },
  2: {
    name: "Big Daddy",
    email: "big@daddy.com",
  },
};

// /users/1 => info for user 1
// /users/2 => info for user 2
// /users => info for all the users
// anything else => 404

// Create a local server to receive data from
const server = http.createServer((request, response) => {
  // What if we could break the url in smaller chunks
  // /users/1 => users, 1
  // /users => users, undefined
  // /dokwdodwkdw => wdowdodkwowd, undefined

  const urlChunks = request.url.split("/")
  // Remove the first element of the array
  urlChunks.shift()

  if(urlChunks[0] === "users" && urlChunks.length <= 2){
    response.writeHead(200, { "Content-Type": "application/json" });


    if(urlChunks.length === 1){
      const data = JSON.stringify(users)
      return response.end(data);
    }
    if(urlChunks.length === 2){
      const data = JSON.stringify(users[urlChunks[1]])
      return response.end(data);
    }
  }

  response.writeHead(404, { "Content-Type": "text/html" });
  return response.end("NOT FOUND");

  // If I have users as the first value extracted, then we should the big object
  // We need to convert the relevant data to JSON
  // Status: 200
  // Kind of data: application/json

  // If I have users as the first value extracted and a number in the second, then we should return the user obj
  // We need to convert the relevant data to JSON
  // Status: 200
  // Kind of data: application/json

  // If I don't have users as the first value, we should return an error message for not found
  // We need to send an error string
  // Status: 404
  // Kind of data: text/html


















  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "application/json" });

    return response.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  }

  if (request.url !== "/") {
    response.writeHead(418, { "Content-Type": "text/html" });

    return response.end("Resource not found!");
  }
});

server.listen(8000);
