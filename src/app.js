const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public/")));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/financas", (req, res, next) => {
  res.render("main-hub");
});

app.get("/sobre", (req, res, next) => {
  res.render("about");
});

app.get("/login", () => {
  res.render("login");
});

app.listen(3000);
