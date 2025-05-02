const pg = require("pg");
const { Client } = pg;

const client = new Client({
  user: "labber",
  password: "labber",
  host: "localhost",
  port: 5432,
  database: "march31_jokes",
});

const runQuery = (sqlQuery, sqlParams, isSingleResult) => {
  return client
    .query(sqlQuery, sqlParams)
    .then((res) => (isSingleResult ? res.rows[0] : res.rows));
};

const reportError = (error) => {
  console.log("😡😡🤬🤬😡😡🤬🤬😡😡🤬🤬");
  console.log(error);
  console.log("😡😡🤬🤬😡😡🤬🤬😡😡🤬🤬");
};

const closeConnection = () => client.end();

client.connect();

module.exports = { runQuery, reportError, closeConnection };
