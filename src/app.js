const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const { gasto } = require("./routes/main-hub");
//const financasData = require("./routes/main-hub.js");
const gastos = [];

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public/")));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/sobre", (req, res, next) => {
  res.render("about");
});

app.get("/financas", (req, res, next) => {
  res.render("main-hub");
});

app.post("/add_gasto", (req, res, next) => {
  gasto.push({ nome_gasto: req.body.nome_gasto });
  console.log(gasto);
  res.redirect("/financas");
});

app.get("/login", (req, res, next) => {
  res.render("login");
});

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(3000);
