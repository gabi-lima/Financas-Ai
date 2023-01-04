const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname + "/public/")));

app.get("/", function (req, res, next) {
  res.render("index");
});

app.listen(3000);
