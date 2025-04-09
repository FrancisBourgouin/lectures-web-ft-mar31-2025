const net = require("net");

let count = 0

let connections = []

const initialSetup = (connection) => {
  connection.setEncoding("utf8")

  console.log("A client connected");

  const connectionId = connections.length
  connections.push(connection)

  return connectionId
}

const parrotBack = (data, connection) => {
  console.log(data)
  connection.write(`🦜: ${data}`)
}

const broadcast = (data, connection) => {
  for(const storedConnection of connections){
    if(storedConnection !== connection){
      storedConnection.write(`📣: ${data}`)
    }
  }
}
const broadcastAndLog = (data, connection) => {
  const userIndex = connections.findIndex(conn => conn === connection)
  console.log(`User #${userIndex} said: ${data}`)

  for(const storedConnection of connections){
    if(storedConnection !== connection){
      storedConnection.write(`📣: ${data}`)
    }
  }
}

const instructionsToHandleAConnection = (connection) => {
  // Initial setup
  const connectionId = initialSetup(connection)
  console.log(`We currently have ${connections.length} active connections`)
  // console.log(connection)

  // Welcome message to client
  connection.write("Welcome to Costco, I love you.\n\n");

  // In the event of receiving from the client
  // connection.on("data", (data) => parrotBack(data, connection));
  connection.on("data", (data) => broadcastAndLog(data, connection));

  connection.on("close", () => {
    console.log("Client left")
    connections = connections.filter(conn => conn !== connection)
  })
}

const server = net.createServer(instructionsToHandleAConnection);

server.listen(9001, () => {
  console.log("server ready!");
});
