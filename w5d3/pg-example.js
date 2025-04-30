// import pg from 'pg' // ???
const pg = require("pg")
// ES6 syntax to fetch other files
// require => CommonJS

const { Pool, Client } = pg // Destructuring
 
// pools will use environment variables
// for connection information
// const pool = new Pool()
 
// // you can also use async/await
// const res = await pool.query('SELECT NOW()') // Await whaaaaat?
// await pool.end()
 
// clients will also use environment variables
// for connection information
const client = new Client()
await client.connect()
 
const res = await client.query('SELECT NOW()')
await client.end()