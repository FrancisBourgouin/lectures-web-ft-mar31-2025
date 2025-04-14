// Basic express server wo/ EJS

// Framework =>
// Library =>
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

const express = require("express");

const server = express();

server.use(express.static("public"))

// On the event of a GET request asking for /
// server.get("/", (req, res) => {
//   return res.send("<h1>Super page of <em>Destiny</em>!</h1>")
// })


// On the event of a GET request asking for /users
server.get("/users", (req, res) => {
  return res.json(users)
})

// On the event of a GET request asking for /users/XXXX 
server.get("/users/:userId", (req,res) => {
  const userId = req.params.userId

  return res.json(users[userId])
})

server.listen(8000);
