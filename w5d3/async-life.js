const fs = require("fs/promises");

// Async JS

// Callbacks

// The original way to handle asynchronous operations

// Promises

// Newer version of how to interact with asynchronous operations

fs.readFile("./.gitignore")
  .then((data) => console.log("data", data))
  .then(() => fs.readFile("./README.md"))
  .then((data) => console.log("data", data))
  .catch(err => console.log("OH NO"))
  .finally(() => console.log("We done."))

console.log("Almost done!")

const someObject = new Object()
const anotherObject = {}

// LAZYNESS


// Async/Await (Syntax Sugar for Promises)
