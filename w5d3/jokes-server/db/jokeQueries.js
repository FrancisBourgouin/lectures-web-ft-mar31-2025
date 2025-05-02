const { runQuery } = require("./db");

const fetchAllJokes = () => {
  const query = `
  SELECT 
    jokes.*,
    CASE
      WHEN authors.name IS NOT NULL THEN authors.name
      WHEN authors.name IS NULL THEN 'Secret Author'
    END AS author_name,
    authors.description AS author_description,
    authors.funny AS author_funny
  FROM jokes
  LEFT JOIN authors
  ON jokes.author_id = authors.id
`;

  return runQuery(query);
};

const fetchJokeById = (jokeId) => {
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
`;
  const params = [jokeId];

  return runQuery(query, params, true);
};

const fetchJokesByRating = (rating) => {
  return Promise.resolve(["jokes", "jokes"]);
};

module.exports = { fetchAllJokes, fetchJokeById, fetchJokesByRating };
