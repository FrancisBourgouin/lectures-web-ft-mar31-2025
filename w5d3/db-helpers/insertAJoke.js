const client = require("./db");

const runQuery = (client, sqlQuery, sqlParams, isSingleResult) => {
  return client
    .connect()
    .then(() => client.query(sqlQuery, sqlParams))
    .then((res) => (isSingleResult ? res.rows[0] : res.rows));
};

const reportError = (error) => {
  console.log("😡😡🤬🤬😡😡🤬🤬😡😡🤬🤬");
  console.log(error);
  console.log("😡😡🤬🤬😡😡🤬🤬😡😡🤬🤬");
};

const showJoke = (joke) => {
  console.log("\n*** *** ***");
  console.log("Joke #", joke.id);
  console.log("Question", joke.question);
  console.log("Answer", joke.answer);
  // console.log("By", joke.author_name)
  console.log("By", joke.author_name ? joke.author_name : "Unknown author");
  console.log("*** *** ***\n");
};


const query = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
`

// const params = [
//   "Wow?",
//   "Wow",
//   1,
//   1
// ]

const params = process.argv.slice(2)

runQuery(client, query, params, true)
  .then(joke => console.log(joke))
  .catch(reportError)
  .finally(() => client.end())