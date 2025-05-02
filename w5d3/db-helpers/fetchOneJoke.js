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
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.description AS author_description,
    authors.funny AS author_funny
  FROM jokes
  LEFT JOIN authors
  ON jokes.author_id = authors.id
  WHERE jokes.id = $1
  ORDER BY jokes.id $2
`;
// const query = `
//   SELECT *
//   FROM jokes
//   JOIN authors
//   ON jokes.author_id = authors.id
// `

const params = [process.argv[2], "DESC"]

runQuery(client, query, params, true)
  .then(showJoke)
  .catch(reportError)
  .finally(() => client.end());
