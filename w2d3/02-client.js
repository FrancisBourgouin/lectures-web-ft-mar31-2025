const net = require("net")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const connectionOptions = {
  host:"8.tcp.ngrok.io",
  port:10591
}

let message = "🐔"

const connection = net.createConnection(connectionOptions)

connection.on("data", (data) => console.log(`${data}`))

// setInterval(() => {
//   connection.write(message+"\n")
//   message += "🐔"
// },500)

rl.on('line', (input) => {
  // console.log(`Received: ${input}`);
  connection.write(input)
});

connection.on("close", () => {
  console.log("Server closed their connection")
  rl.close()
})