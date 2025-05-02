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

// console.log("Almost done!")

const someObject = new Object()
const anotherObject = {} // Syntax Sugar

// LAZYNESS


// Async/Await (Syntax Sugar for Promises)

await Promise.all()

const main = async () => {  
  try{
    const data2 = await fs.readFile("./README2.md")
    
    console.log("data2", data2)
    
    console.log("We done.")
  } catch (err){
    console.log("OH NO!")
  }
}

const main2 = async () => {
  const data = await fs.readFile("./.gitignore")
  
  console.log("data", data)
  
  console.log("We done.")
}

main()
// main2()