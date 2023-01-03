const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(__dirname + "/public"));
app.get("/"),
  (req, res, next) => {
    res.send("<h1>S</h1>");
  };

app.listen(3000);
