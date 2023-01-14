const express = require("express");
const router = express.Router();
const tabelaGasto = [];
const tabelaGanho = [];

router.get("/", (req, res, next) => {
  res.render("main-hub", {
    tabelaGastos: tabelaGasto,
    tabelaGanhos: tabelaGanho,
  });
});

router.post("/add_gasto", (req, res, next) => {
  tabelaGasto.push({
    nome: req.body.nome,
    valor: req.body.valor,
    data: req.body.data,
    status: req.body.status,
  });
  console.log("gastos: ", tabelaGasto);
  res.redirect("/financas");
});

router.post("/add_ganho", (req, res, next) => {
  tabelaGanho.push({
    nome: req.body.nome,
    valor: req.body.valor,
    data: req.body.data,
    origem: req.body.origem,
  });
  console.log("ganhos", tabelaGanho, "gastos", tabelaGasto);
  res.redirect("/financas");
});
module.exports = router;
