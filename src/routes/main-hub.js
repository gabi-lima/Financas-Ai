const path = require("path");
const express = require("express");
const router = express.Router();
const tabelaGasto = [];

router.get("/financas", (req, res, next) => {
  res.render("main-hub");
});

router.post("/add_gasto", (req, res, next) => {
  tabelaGasto.push({ nome_gasto: req.body.nome_gasto });
  console.log(tabelaGasto);
  res.redirect("/financas");
});

exports.routes = router;
exports.gasto = tabelaGasto;
