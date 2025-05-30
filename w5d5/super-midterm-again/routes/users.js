/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("users");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
