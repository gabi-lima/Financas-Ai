app.get("/financas", (req, res, next) => {
  res.render("main-hub");
});

app.post("/add_gasto", (req, res, next) => {
  tabelaGasto.push({ nome_gasto: req.body.nome_gasto });
  console.log(tabelaGasto);
  res.redirect("back");
});
