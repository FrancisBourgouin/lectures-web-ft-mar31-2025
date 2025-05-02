const client = require("./db")

const runQuery = (client, query) => {
  return client
  .connect()
  .then(() => client.query(query))
  .then(res => res.rows)
}

const reportError = (error) => {
  console.log("😡😡🤬🤬😡😡🤬🤬😡😡🤬🤬")
  console.log(error)
  console.log("😡😡🤬🤬😡😡🤬🤬😡😡🤬🤬")
}

const showJokes = (jokes) => {
  for(const joke of jokes){
    console.log("\n*** *** ***")
    console.log("Joke #", joke.id)
    console.log("Question", joke.question)
    console.log("Answer", joke.answer)
    // console.log("By", joke.author_name)
    console.log("By", joke.author_name ? joke.author_name : "Unknown author")
    console.log("*** *** ***\n")
  }
}

const query = `
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.description AS author_description,
    authors.funny AS author_funny
  FROM jokes
  LEFT JOIN authors
  ON jokes.author_id = authors.id
`
// const query = `
//   SELECT *
//   FROM jokes
//   JOIN authors
//   ON jokes.author_id = authors.id
// `

runQuery(client, query)
  .then(showJokes)
  .catch(reportError)
  .finally(() => client.end())