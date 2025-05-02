// import pg from 'pg' // ???
const pg = require("pg");
// ES6 syntax to fetch other files
// require => CommonJS

const { Pool, Client } = pg; // Destructuring

// pools will use environment variables
// for connection information
// const pool = new Pool()

// // you can also use async/await
// const res = await pool.query('SELECT NOW()') // Await whaaaaat?
// await pool.end()

// clients will also use environment variables
// for connection information


const client = new Client({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  port: 5432,
  database: 'march31_jokes',
});

client
  .connect()
  .then(() => client.query("SELECT * FROM jokes"))
  .then((res) => console.log(res))
  .catch(err => console.log(err))
  .finally(() => client.end())


