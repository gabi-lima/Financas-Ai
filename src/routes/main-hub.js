const express = require("express");
const router = express.Router();
const tabelaGasto = [];
const tabelaGanho = [];

router.get("/", (req, res, next) => {
  res.render("main-hub");
});
router.post("/add_gasto", (req, res, next) => {
  tabelaGasto.push({
    nome: req.body.nome,
    valor: req.body.valor,
    data: req.body.data,
    status: req.body.status,
  });
  console.log(tabelaGasto);
  res.redirect("/financas");
});

router.post("/add_ganho", (req, res, next) => {
  tabelaGanho.push({
    nome: req.body.nome,
    valor: req.body.valor,
    data: req.body.data,
    origem: req.body.origem,
  });
  console.log("1", tabelaGanho, tabelaGasto);
  res.redirect("/financas");
});
module.exports = router;
