const express = require("express");
const cookieParser = require("cookie-parser");
const {
  authenticateThief,
  getThiefByEmail,
  createThiefAccount,
} = require("./helpers/thiefHelpers");
const { thieves } = require("./data/thiefData");

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // Take a form string and convert it to an object
app.use(cookieParser());
app.set("view engine", "ejs");

// HOME ROUTE

app.get("/", (req, res) => {
  const email = req.cookies.email;
  const error = req.cookies.error;

  const result = getThiefByEmail(thieves, email);

  const templateVars = { thief: result.thief, error };

  res.clearCookie("error");
  return res.render("index", templateVars);
});

// LOGIN PARTAY!

app.post("/logout", (req, res) => {
  res.clearCookie("email");
  return res.redirect("/");
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const result = authenticateThief(thieves, email, password);

  if (result.error) {
    res.cookie("error", result.error);
    return res.redirect("/");
  }

  res.cookie("email", result.thief.email);
  return res.redirect("/");
});

// REGISTER PARTAY!

app.get("/register", (req, res) => {
  const error = req.cookies.error;
  const templateVars = { error };
  return res.render("register", templateVars);
});

app.post("/register", (req, res) => {
  const result = createThiefAccount(thieves, req.body);

  if (result.error) {
    res.cookie("error", result.error);
    return res.redirect("/register");
  }

  res.cookie("email", result.thief.email);
  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable



app.get("/urls")
app.get("/urls/new")
app.get("/urls/:shortUrl")