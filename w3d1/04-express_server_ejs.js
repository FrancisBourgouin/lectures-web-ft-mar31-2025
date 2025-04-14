// Basic express server w/ EJS
const users = {
  1: {
    name: "Patator 🥔",
    email: "patate@rotie.com",
  },
  2: {
    name: "Big Daddy",
    email: "big@daddy.com",
  },
};

const express = require("express");

const server = express();

server.use(express.static("public"));

server.set("view engine", "ejs");

server.use((req, res, next) => {
  console.log("User visited the path:", req.path)

  return next()
})

server.get("/", (req, res) => {
  // EJS + DATA => HTML
  const templateVars = { currentYear: new Date().getFullYear() };

  return res.render("index", templateVars);
});

server.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = users[userId];

  // if(!user){
  //   // return res.redirect("/")
  //   return res.status(404).send("HEY NO USER WITH THAT ID")
  // }

  const templateVars = { user, currentYear: new Date().getFullYear() };

  return res.render("user", templateVars);
});

server.listen(8000);
