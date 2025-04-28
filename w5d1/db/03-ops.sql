-- Basic select

-- SELECT NOW();

SELECT * FROM jokes;


-- Where

-- SELECT * FROM jokes WHERE rating > 5;

-- SELECT * FROM jokes WHERE question LIKE 'What do you call%'
-- SELECT * FROM jokes WHERE LOWER(question) LIKE 'what do you call%' -- SQL WAY!
-- SELECT * FROM jokes WHERE question ILIKE 'what do you call%' -- POSTGRES WAY!

SELECT * 
FROM jokes 
WHERE question ILIKE 'what do you call%' 
AND question ILIKE '% a %'
;

-- Renaming fields

-- SELECT question, answer FROM jokes WHERE question ILIKE 'what do you call%'; -- POSTGRES WAY!
-- SELECT jokes.question, jokes.answer FROM jokes WHERE question ILIKE 'what do you call%'; -- POSTGRES WAY!

-- Filter out some results

-- Ordering results

-- Filter based of text


-- Joining tables

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.description AS author_description,
  authors.funny AS author_funny
FROM jokes 
-- JOIN authors
-- INNER JOIN authors
LEFT JOIN authors
-- RIGHT JOIN authors
-- FULL OUTER JOIN authors
ON jokes.author_id = authors.id
-- ORDER BY rating ASC
ORDER BY rating DESC
LIMIT 5
;


-- Potential problems when working with JavaScript

-- AGGREGATE FUNCTIONS

SELECT 
  AVG(rating),
  author_id
FROM jokes
GROUP BY author_id
HAVING AVG(rating) >= 5;

SELECT
  COUNT(id),
  author_id
FROM jokes
WHERE author_id IS NOT NULL
GROUP BY author_id;

SELECT
  MAX(id),
  MIN(id),
  author_id
FROM jokes
WHERE author_id IS NOT NULL
GROUP BY author_id;


-- View! Read-only table


-- AGGREGATES + Nested selects !

SELECT 
  author_id
FROM jokes
GROUP BY author_id
HAVING AVG(rating) >= 5;

SELECT * FROM jokes WHERE author_id IN (1,2,3);


SELECT *
FROM jokes
WHERE author_id IN (
  SELECT 
    author_id
  FROM jokes
  GROUP BY author_id
  HAVING AVG(rating) >= 5
)
;



DROP VIEW IF EXISTS jokes_with_cool_authors ;
DROP VIEW IF EXISTS jokes_with_authors ;
CREATE VIEW jokes_with_authors AS (
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.description AS author_description,
    authors.funny AS author_funny
  FROM jokes 
  LEFT JOIN authors
  ON jokes.author_id = authors.id
  ORDER BY rating DESC
)

SELECT * FROM jokes_with_authors;


CREATE VIEW jokes_with_cool_authors AS (
  SELECT *
  FROM jokes_with_authors
  WHERE author_id IN (
    SELECT 
      author_id
    FROM jokes
    GROUP BY author_id
    HAVING AVG(rating) >= 5
  )
)
;


SELECT * FROM authors;
SELECT COUNT(*) FROM authors WHERE FUNNY IS TRUE;

SELECT
  MIN(rating),
  MAX(rating)
FROM jokes;


-- What is the average rating of jokes written by authors who are marked as funny in the authors table?
SELECT
  AVG(rating),
  author_id
FROM jokes
WHERE author_id IN (SELECT id FROM authors WHERE FUNNY IS TRUE)
GROUP BY author_id
;

;
