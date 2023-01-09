function popupGastos() {
  var select_gastos = document.getElementsByClassName("select_gastos");
  var select_ganhos = document.getElementsByClassName("select_ganhos");

  select_gastos[0].style.display = "flex";
  select_gastos[1].style.display = "flex";

  select_ganhos[0].style.display = "none";
  select_ganhos[1].style.display = "none";

  document.getElementsByClassName("form_popup")[0].style.display = "flex";

  var form = document.querySelector(".form");
  form.action = "/add_gasto";
}

function popupGanhos() {
  var select_gastos = document.getElementsByClassName("select_gastos");
  var select_ganhos = document.getElementsByClassName("select_ganhos");

  select_gastos[0].style.display = "none";
  select_gastos[1].style.display = "none";

  select_ganhos[0].style.display = "flex";
  select_ganhos[1].style.display = "flex";

  document.getElementsByClassName("form_popup")[0].style.display = "flex";

  var form = document.querySelector(".form");
  form.action = "/add_ganho";
}

function fecharPopup() {
  document.getElementsByClassName("form_popup")[0].style.display = "none";
}
