const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { fetchAllJokes, fetchJokeById, fetchJokesByRating } = require("./db/jokeQueries");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/jokes", (req, res) => {
  fetchAllJokes()
    .then((jokes) => res.json(jokes))
    .catch((err) => res.send(err));
});

app.get("/api/jokes/:jokeId", (req, res) => {
  fetchJokeById(req.params.jokeId)
    .then((jokes) => res.json(jokes))
    .catch((err) => res.send(err));
});

app.get("/jokes/rating/:rating", (req, res) => {
  // fetchJokesByRating(req.params.rating)...
})

app.get("/jokes", (req, res) => {
  fetchAllJokes()
    .then((jokes) => {
      const templateVars = {jokes}
      return res.render("jokes", templateVars)
    })
    .catch((err) => res.send(err));
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
